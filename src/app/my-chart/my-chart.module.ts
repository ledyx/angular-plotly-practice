import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyChartComponent } from './my-chart.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    MyChartComponent
  ],
  exports: [
    MyChartComponent
  ],
  imports: [
    CommonModule,
    PlotlyModule
  ]
})
export class MyChartModule { }
