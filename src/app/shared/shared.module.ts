import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipes
import { CopeckaPipe } from './pipes/copecka.pipe';
import { MsisdnPipe } from './pipes/msisdn.pipe';



@NgModule({
  declarations: [
    CopeckaPipe,
    MsisdnPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MsisdnPipe,
    CopeckaPipe
  ],
  providers: []
})
export class SharedModule { }
