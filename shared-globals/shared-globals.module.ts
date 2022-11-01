import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelect9DropDownModule } from 'ng-multiselect-dropdown9';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgMultiSelect9DropDownModule.forRoot(),
    NgbModule,
    NgbModalModule,
  ],
  declarations: [],
  exports: [
    NgMultiSelect9DropDownModule
  ]
})
export class SharedGlobalsModule { }
