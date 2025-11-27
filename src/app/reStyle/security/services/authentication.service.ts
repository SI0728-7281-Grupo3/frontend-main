import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {SignInResponse} from "../model/sign-in.response";
import {SignInRequest} from "../model/sign-in.request";
import {SignUpRequest} from "../model/sign-up.request";
import {SignUpResponse} from "../model/sign-up.response";
import {SnackbarService} from "../../../shared/services/snackbar.service";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    basePath: string = `${environment.serverBasePath}`;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })};

    private signedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private signedInUserId: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private signedInUsername: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private router: Router, private http: HttpClient, private snackbarService: SnackbarService) { }


    showSuccessMessage(messageContent: string) {
        const successImage='assets/images/success.png'
        this.snackbarService.showSuccess1(messageContent, successImage);
    }

    showErrorMessage(messageContent: string) {
        const errorImage='assets/images/error.png'
        this.snackbarService.showError1(messageContent, errorImage);
    }

    get isSignedIn() { return this.signedIn.asObservable();}

    get currentUserId() { return this.signedInUserId.asObservable(); }

    get currentUsername() { return this.signedInUsername.asObservable(); }

    signUp(signUpRequest: SignUpRequest) {
        return this.http.post<SignUpResponse>(`${this.basePath}/authentication/sign-up`, signUpRequest, this.httpOptions)
            .subscribe({
                next: (response) => {
                    console.log(`Signed up as ${response.username} with id: ${response.id}`);
                    this.router.navigate(['home/sign-in']).then();
                },
                error: (error) => {
                    console.error(`Error while signing up: ${error}`);
                    this.router.navigate(['home/sign-up']).then();
                }
            });
    }

    signIn(signInRequest: SignInRequest) {
        //console.log(signInRequest);
        return this.http.post<SignInResponse>(`${this.basePath}/authentication/sign-in`, signInRequest, this.httpOptions)
            .subscribe({
                next: (response) => {
                    this.signedIn.next(true);
                    this.signedInUserId.next(response.id);
                    this.signedInUsername.next(response.username || response.firstName);
                    // Usar sessionStorage para mayor seguridad - se limpia al cerrar la pestaña
                    sessionStorage.setItem('token', response.token);
                    sessionStorage.setItem('sessionId', response.sessionId);
                    sessionStorage.setItem('userRole', response.userRole);
                    sessionStorage.setItem('firstName', response.firstName);
                    sessionStorage.setItem('signInId', response.id.toString());
                    console.log(`Signed in - ID: ${response.id}, FirstName: ${response.firstName}, UserRole: ${response.userRole}, SessionId: ${response.sessionId}`);
                    console.log('SessionStorage guardado:', {
                        token: response.token ? 'presente' : 'ausente',
                        sessionId: response.sessionId,
                        userRole: response.userRole,
                        firstName: response.firstName
                    });
                    this.router.navigate([`business`]).then();
                    this.showSuccessMessage('Sign In succesfully. ' + (response.firstName || response.username) + ' Welcome to Restyle!')
                },
                error: (error) => {
                    this.showErrorMessage('Th user or password are incorrect. Please, try again.');
                    this.signedIn.next(false);
                    this.signedInUserId.next(0);
                    this.signedInUsername.next('');
                    console.error(`Error while signing in: ${error}`);
                    this.router.navigate(['home/sign-in']).then();

                }
            });
    }

    signOut() {
        this.signedIn.next(false);
        this.signedInUserId.next(0);
        this.signedInUsername.next('');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('sessionId');
        sessionStorage.removeItem('userRole');
        sessionStorage.removeItem('firstName');
        sessionStorage.removeItem('signInId');
        this.router.navigate(['home/sign-in']).then();
    }
}