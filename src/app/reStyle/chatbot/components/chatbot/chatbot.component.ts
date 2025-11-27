import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService, ChatRequest, ChatResponse } from '../../services/chat.service';
import { ChatMessage } from '../../models/chat-message';
import { AuthenticationService } from '../../../security/services/authentication.service';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent implements OnInit, OnDestroy {
  isOpen = false;
  messages: ChatMessage[] = [];
  currentMessage = '';
  isLoading = false;
  private sessionId: string = '';
  private userName: string = '';
  private userRole: string = '';
  private authSubscription?: Subscription;
  private tokenCheckInterval?: any;

  constructor(
    private chatService: ChatService,
    private authenticationService: AuthenticationService
  ) { }

  // Getter que verifica sessionStorage en cada detección de cambios
  get isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }

  ngOnInit() {
    // Suscribirse a cambios en el estado de autenticación
    this.authSubscription = this.authenticationService.isSignedIn.subscribe(
      (isSignedIn: boolean) => {
        if (isSignedIn) {
          this.loadUserData();
          this.initializeWelcomeMessage();
        } else {
          // Limpiar completamente si el usuario cierra sesión
          this.clearChat();
        }
      }
    );

    // Verificación inicial
    if (this.isAuthenticated) {
      this.loadUserData();
      this.initializeWelcomeMessage();
    } else {
      // Si no está autenticado al iniciar, asegurar que el chat esté limpio
      this.clearChat();
    }

    // Verificación periódica del token como respaldo (por si el BehaviorSubject no emite correctamente)
    this.tokenCheckInterval = setInterval(() => {
      const hasToken = !!sessionStorage.getItem('token');
      if (!hasToken && this.messages.length > 0) {
        // Si no hay token pero hay mensajes, limpiar el chat
        this.clearChat();
      }
    }, 1000); // Verificar cada segundo
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
    // Limpiar el intervalo de verificación de token
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
    }
  }

  private loadUserData() {
    this.sessionId = sessionStorage.getItem('sessionId') || this.generateSessionId();
    this.userName = sessionStorage.getItem('firstName') || sessionStorage.getItem('username') || 'Usuario';
    this.userRole = sessionStorage.getItem('userRole') || 'ROLE_USER';
  }

  private initializeWelcomeMessage() {
    // Solo agregar mensaje de bienvenida si no hay mensajes previos
    if (this.messages.length === 0) {
      this.messages.push({
        id: this.generateId(),
        content: '¡Hola! Soy el asistente virtual de Restyle. ¿En qué puedo ayudarte hoy?',
        sender: 'assistant',
        timestamp: new Date()
      });
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  closeChat() {
    this.isOpen = false;
  }

  sendMessage() {
    if (!this.currentMessage.trim() || this.isLoading) {
      return;
    }

    // Recargar datos de sessionStorage justo antes de enviar para asegurar valores actualizados
    const currentSessionId = sessionStorage.getItem('sessionId') || this.generateSessionId();
    const currentUserName = sessionStorage.getItem('firstName') || sessionStorage.getItem('username') || 'Usuario';
    const currentUserRole = sessionStorage.getItem('userRole') || 'ROLE_USER';

    // Actualizar las variables privadas también
    this.sessionId = currentSessionId;
    this.userName = currentUserName;
    this.userRole = currentUserRole;

    const userMessage: ChatMessage = {
      id: this.generateId(),
      content: this.currentMessage.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    this.messages.push(userMessage);
    const messageToSend = this.currentMessage.trim();
    this.currentMessage = '';
    this.isLoading = true;

    const request: ChatRequest = {
      sessionId: currentSessionId,
      userName: currentUserName,
      userRole: currentUserRole,
      message: messageToSend
    };

    console.log('Enviando mensaje con:', { sessionId: currentSessionId, userName: currentUserName, userRole: currentUserRole });

    this.chatService.sendMessage(request).subscribe({
      next: (response: ChatResponse) => {
        const assistantMessage: ChatMessage = {
          id: this.generateId(),
          content: response.response,
          sender: 'assistant',
          timestamp: new Date()
        };
        this.messages.push(assistantMessage);
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('Error al enviar mensaje:', error);
        const errorMessage: ChatMessage = {
          id: this.generateId(),
          content: 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.',
          sender: 'assistant',
          timestamp: new Date()
        };
        this.messages.push(errorMessage);
        this.isLoading = false;
      }
    });
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom() {
    setTimeout(() => {
      const chatMessages = document.getElementById('chat-messages');
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }, 100);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  private generateSessionId(): string {
    return 'session-' + Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  /**
   * Limpia completamente el chat cuando el usuario cierra sesión
   */
  private clearChat(): void {
    this.messages = [];
    this.isOpen = false;
    this.currentMessage = '';
    this.isLoading = false;
    this.sessionId = '';
    this.userName = '';
    this.userRole = '';
    console.log('Chat limpiado después de cerrar sesión');
  }
}

