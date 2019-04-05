import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
  MatToolbarModule, MatSidenavModule, MatListModule, MatTabsModule,
  MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule,
  MatInputModule, MatFormFieldModule, MatSnackBarModule, MatTooltipModule,
  MatProgressSpinnerModule, MatSlideToggleModule, MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    // Material
    MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatTabsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule,
    MatInputModule, MatFormFieldModule, MatSnackBarModule, MatTooltipModule,
    MatProgressSpinnerModule, MatSlideToggleModule, MatDialogModule
  ],
  declarations: [],
  exports: [
    MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatTabsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule,
    MatInputModule, MatFormFieldModule, MatSnackBarModule, MatTooltipModule,
    MatProgressSpinnerModule, MatSlideToggleModule, MatDialogModule
  ],
  providers: []
})
export class AppMaterialModule { }
