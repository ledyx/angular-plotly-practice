import { Component, Inject } from '@angular/core';
import { PLOTLY_CONFIG } from '../app.module';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent {
  data: Partial<Plotly.PlotData>[] = [
    this.toChartData([20, 14, 23], ['row1', 'row2', 'row3'], 'Step1'),
    this.toChartData([12, 18, 29], ['row1', 'row2', 'row3'], 'Step2')
  ];

  layout: Partial<Plotly.Layout> = {
    barmode: 'stack',
    bargap: 0.1,
    xaxis: {
      automargin: true,
      side: 'top',
      showline: true,
      ticklen: 7,
      tickcolor: "#eee",
      ticksuffix: "ms",
      title: {
        text: "Endtime",
        standoff: 10
      }
    },
    yaxis: {
      automargin: true,
      autorange: 'reversed',
      ticklen: 3,
      tickcolor: "transparent",
      title: {
        text: "Steps",
        standoff: 10
      }
    },
    legend: {
      itemclick: 'toggleothers',
    },
    dragmode: false,
    showlegend: false,
    height: this.getRowLength()
  };


  constructor(@Inject(PLOTLY_CONFIG) public config: Plotly.Config) {
    config.modeBarButtons = [
      [ 'toImage'],
    ];
  }

  private getRowLength(): number {
    return this.data?.[0].x?.length! * 100;
  }

  private toChartData(values: number[], steps: string[], barName: string, color?: string): Partial<Plotly.PlotData> {
    return {
      x: values,
      y: steps,
      name: barName,
      orientation: 'h',
      type: 'bar',
      marker: {
        color: color,
        width: 1
      },
    }
  }
}
