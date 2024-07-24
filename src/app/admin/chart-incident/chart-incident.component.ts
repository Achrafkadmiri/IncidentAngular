import {Component, OnInit} from '@angular/core';
import {CountPrive} from "../../models/AnnonceEmp.module";
import {ApiAnnonceEmpService} from "../../services/api-annonce-emp.service";
import {Chart} from "chart.js";
import {ApiService} from "../../services/api.service";
import {CountIncident} from "../../models/Incident.module";

@Component({
  selector: 'app-chart-incident',
  templateUrl: './chart-incident.component.html',
  styleUrls: ['./chart-incident.component.css']
})
export class ChartIncidentComponent implements OnInit{
  chartBar: any = [];
  private CountStageArray!: Array<CountIncident>;
  year!:number[]
  count!:number[]
  public barChartData!:any ;
  private month!:number[];
  private countMonthMap: any;
  private monthCountsNoTraited!: any[];
  private monthCountsTraited!: any[];

  selectedYear: string = '2024';
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.getCountNoTraited(false,Number(this.selectedYear))

  }
  createChart(){
    this.chartBar = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'Mai', 'June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Pending File',
            data: this.monthCountsNoTraited,
            borderWidth: 1,
          backgroundColor: 'rgba(245, 39, 145, 0.2)'
          },
          {
            label: 'Traited File',
            data: this.monthCountsTraited,
            borderWidth: 1,
            backgroundColor: 'rgba(26, 39, 245, 0.2)'
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize:10
              }
            }
          ]
        },
      },
    });
  }
  getCountNoTraited(status:boolean,year:number){
    this.countMonthMap = new Map();
    this.api.getCount(status,year).subscribe({
      next:value => {
        this.CountStageArray =value
        console.log(this.CountStageArray)
        this.CountStageArray?.forEach(value1 => {
          this.countMonthMap.set( value1.month,value1.count);
        });
        this.monthCountsNoTraited = Array(12).fill(0);
        const monthNames = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ];
        monthNames.forEach((month, index) => {
          if (this.countMonthMap.has(month)) {
            this.monthCountsNoTraited[index] = this.countMonthMap.get(month)?this.countMonthMap.get(month):0;
          }
        });
        this.getCountTraited(!status,year)
      }
    })

  }
  getCountTraited(status:boolean,year:number){
    this.countMonthMap = new Map();
    this.api.getCountTraited(status,year).subscribe({
      next:value => {
        this.CountStageArray =value
        console.log(this.CountStageArray)
        this.CountStageArray?.forEach(value1 => {
          this.countMonthMap.set( value1.month,value1.count);
        });
        this.monthCountsTraited = Array(12).fill(0);
        const monthNames = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
        ];
        monthNames.forEach((month, index) => {
          if (this.countMonthMap.has(month)) {
            this.monthCountsTraited[index] = this.countMonthMap.get(month)?this.countMonthMap.get(month):0;
          }
        });
        this.createChart()
      }
    })

  }
  onYearChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedYear = selectElement.value;
    this.getCountNoTraited(false,Number(this.selectedYear));
  }

}
