import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimPipe } from './trim.pipe';

@NgModule({
  imports: [
  ],
  declarations: [   
    TrimPipe 
  ],
  exports:[TrimPipe]
})
export class SharedModule { }