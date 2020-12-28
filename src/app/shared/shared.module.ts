import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from './pipes';
import { AppPageTitleComponent } from './components/app-page-title/app-page-title.component';

export const COMPONENTS = [
  AppPageTitleComponent
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule
  ],
  declarations: [ COMPONENTS ],
  entryComponents: [],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PipesModule,
    COMPONENTS
  ],
})
export class SharedModule {
}
