import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedGlobalsComponent } from './shared-globals/shared-globals.component';
import { NgMultiSelect9DropDownModule } from 'ng-multiselect-dropdown9';

@NgModule({
  imports: [
    CommonModule,
    NgMultiSelect9DropDownModule.forRoot()
  ],
  declarations: [SharedGlobalsComponent],
  exports: [
    NgMultiSelect9DropDownModule
  ]
})
export class SharedGlobalsModule { }
