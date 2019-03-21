import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { GoogleAnaEventTrackService } from './myga.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule ],
  providers: [ Title, GoogleAnaEventTrackService],
  exports: []
})
export class MygaModule { }
