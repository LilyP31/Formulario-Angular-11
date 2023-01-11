import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsValiComponent } from './forms-vali/forms-vali.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormsValiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsValiComponent
  ],
})
export class FormularioModule { }
