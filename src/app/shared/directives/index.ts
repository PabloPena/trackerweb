import { NgModule } from '@angular/core';
import { UrlValidatorDirective } from './url-validator.directive';

export const DIRECTIVES = [UrlValidatorDirective];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule { }
