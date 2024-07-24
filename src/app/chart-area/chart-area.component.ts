import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js";
import {CountPrive, CountType} from "../models/AnnonceEmp.module";
import {ApiAnnonceEmpService} from "../services/api-annonce-emp.service";

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.css']
})
export class ChartAreaComponent implements OnInit{
  chartBar: any;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  CountPriveArray!:CountPrive[]
  CountStageArray!:CountPrive[]
  CountTypeArray!:CountType[]

  year!:string[]
  count!:number[]
  count1!:number[]
  count2!:number[]
  public barChartLabels!:string[];
  public barChartData!:any ;


  constructor(public api:ApiAnnonceEmpService) {
  }
  ngOnInit(): void {
    this.getCountDemande()


  }


  getCountDemande(){
    this.api.getCountType().subscribe({
      next:value => {
        this.CountTypeArray =value
        console.log(this.CountTypeArray)
        this.year = ['Etat','Public','Territoire']
        this.barChartLabels=this.year
        this.count2 = this.CountTypeArray?.map((value1, index) => value1.count);
        this.barChartData= [
          {data: this.count2, label: 'Secteur Etatique' ,backgroundColor: 'rgba(0, 255, 0, 0.21)'},

        ]

        this.areaChart()
      }
    })

  }


  areaChart(){

    this.chartBar=new Chart("myLineChart", {
      type: 'line',
      data: {
        labels: this.barChartLabels,
        datasets: this.barChartData
      },
      options:{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          }
        },
        scales:{
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize:10
              }
            }
          ]
        }
      }

    });
  }

}
