import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelect9DropDownModule } from 'ng-multiselect-dropdown9';

@NgModule({
  imports: [
    CommonModule,
    NgMultiSelect9DropDownModule.forRoot()
  ],
  declarations: [],
  exports: [
    NgMultiSelect9DropDownModule
  ]
})
export class SharedGlobalsModule { }
