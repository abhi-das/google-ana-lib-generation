import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GoogleAnaEventTrackService } from './myga.service';
import { MygaComponent } from './myga.component';



@NgModule({
  declarations: [MygaComponent],
  imports: [ CommonModule,HttpClientModule ],
  providers: [ Title, GoogleAnaEventTrackService],
  exports: [MygaComponent]
})
export class MygaModule { }
