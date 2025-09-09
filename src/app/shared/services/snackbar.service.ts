import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomSnackbarComponent} from "../../public/components/custom-snackbar/custom-snackbar.component";
import {Injectable} from "@angular/core";
@Injectable({
    providedIn: 'root',
})
export class SnackbarService {


    //private imageSuccess: string = 'assets/images/success.png';
    //private imageError: string = 'assets/images/error.png';

    constructor(private snackBar: MatSnackBar) {

    }

    showSuccess1(message: string, image: string) {
        this.snackBar.openFromComponent(CustomSnackbarComponent, {
            duration: 3000,
            data: { message, image },
            horizontalPosition: 'center', // Posición horizontal centrada
            verticalPosition: 'top', // Posición vertical superior
            panelClass: ['snackbar-success']
        });
    }

    showError1(message: string, image: string) {
        this.snackBar.openFromComponent(CustomSnackbarComponent, {
            duration: 3000,
            data: { message, image },
            horizontalPosition: 'center', // Posición horizontal centrada
            verticalPosition: 'top', // Posición vertical superior
            panelClass: ['snackbar-error']
        });
    }
}