import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {
  MatAutocompleteModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatListModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    // General Modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SlimLoadingBarModule,
    // Material Modules
    MatAutocompleteModule,
    MatFormFieldModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: []
})
export class SharedModule {
}
