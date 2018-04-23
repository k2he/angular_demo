import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule} from '@angular/material/list';
import { MatTableModule, MatSortModule, MatInputModule } from '@angular/material';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule, MatCardModule, MatDialogModule, MatToolbarModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule, 

    MatSortModule,
    MatListModule,
    MatTooltipModule,
    MatToolbarModule, 
    MatButtonModule,
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,

    MatProgressSpinnerModule
  ],
  exports: [
    MatSortModule,
    MatListModule,
    MatTooltipModule,
    MatToolbarModule, 
    MatButtonModule,
    MatCardModule, 
    MatInputModule, 
    MatDialogModule, 
    MatTableModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
})
export class MaterialModuleModule { }