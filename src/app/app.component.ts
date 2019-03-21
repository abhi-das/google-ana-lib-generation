import { Component } from '@angular/core';
import { GoogleAnaEventTrackService } from 'myga';

import  { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gagn';
  _siteConfig: any;
  constructor(protected _googleAna: GoogleAnaEventTrackService, private appConfigSrv: AppConfig) {

    this._siteConfig = this.appConfigSrv.getConfig();
    this._googleAna.startGA(this._siteConfig);

  }
}
