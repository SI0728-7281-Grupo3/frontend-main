import {Component, Input, OnInit} from '@angular/core';
import {ToolbarComponent} from "../../public/components/toolbar/toolbar.component";
import {SidebarComponent} from "../../public/components/sidebar/sidebar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, UntypedFormBuilder} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {PortfolioSnackComponent} from "../portfolio-snack/portfolio-snack.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    ToolbarComponent,
    SidebarComponent,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  @Input() maxRating = 5;
  maxRatingArray:any =[];

  @Input() SelectedStar = 0;
  previousSelection = 0;

  constructor(private fb: UntypedFormBuilder,  private _snackBar: MatSnackBar) {}

  HandleMouseEnter(index: number): void {
    this.SelectedStar = index+1;
  }
  HandleMouseLeave(): void {
    if (this.previousSelection !== 0) {
      this.SelectedStar = this.previousSelection;
    }
    else{
      this.SelectedStar = 0;
    }
  }
  Rating(index: number): void {
    this.SelectedStar = index+1;
    this.previousSelection = this.SelectedStar;
  }

  editForm = this.fb.group({
    photo: []
  });

  addProject(): void {
    this._snackBar.openFromComponent(PortfolioSnackComponent, {
      duration:3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }
  setFileData(event: Event): void {
    const eventTarget: HTMLInputElement | null = event.target as HTMLInputElement | null;
    if (eventTarget?.files?.[0]) {
      const file: File = eventTarget.files[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.editForm.get('photo')?.setValue(reader.result as string);
      });
      reader.readAsDataURL(file);
    }
  }

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }
}
