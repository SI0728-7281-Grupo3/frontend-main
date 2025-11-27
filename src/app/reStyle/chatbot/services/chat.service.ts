import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ChatRequest {
  sessionId: string;
  userName: string;
  userRole: string;
  message: string;
}

export interface ChatResponse {
  response: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // El endpoint del chat es /api/chat, no /api/v1/chat
  private baseUrl = environment.serverBasePath.replace('/api/v1', '/api');
  private chatEndpoint = `${this.baseUrl}/chat`;

  constructor(private http: HttpClient) { }

  sendMessage(request: ChatRequest): Observable<ChatResponse> {
    // El interceptor de autenticación agregará automáticamente el token Bearer
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    
    return this.http.post<ChatResponse>(this.chatEndpoint, request, httpOptions);
  }
}

