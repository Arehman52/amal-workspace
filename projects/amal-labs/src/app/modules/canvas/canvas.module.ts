import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './canvas.component';
import { CanvasRoutingModule } from './canvas-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedGlobalsModule } from 'shared-globals/shared-globals.module';

@NgModule({
  imports: [
    CommonModule, CanvasRoutingModule, SharedGlobalsModule, FormsModule
  ],
  declarations: [CanvasComponent]
})
export class CanvasModule { }
