import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyChartModule } from './my-chart/my-chart.module';

export const PLOTLY_CONFIG = new InjectionToken<Plotly.Config>("plotly.config");

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyChartModule
  ],
  providers: [
    {
      provide: PLOTLY_CONFIG, useValue: {
        responsive: true,
        displaylogo: false
      } as Plotly.Config
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
