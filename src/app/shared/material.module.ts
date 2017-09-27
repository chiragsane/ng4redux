import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule, MdIconModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MdToolbarModule,
    MdIconModule
  ]
})
export class MaterialModule { }
