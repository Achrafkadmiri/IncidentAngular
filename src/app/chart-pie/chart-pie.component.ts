import {Component, OnInit} from '@angular/core';
import {Count, CountPrive} from "../models/AnnonceEmp.module";
import {ApiAnnonceEmpService} from "../services/api-annonce-emp.service";
import {Chart} from "chart.js";

@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit{
  chartBar: any;
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  CountRecruteurArray!: Count;
  CountDemandeArray!:CountPrive[]

  count!:number
  count1!:number
  countArray!:number[]

  public barChartLabels!:string[];
  public barChartData!:any ;
    CountCandidatArray!: Count;


  constructor(public api:ApiAnnonceEmpService) {
  }
  ngOnInit(): void {
    this.getCountCandidat()


  }
  getCountCandidat(){
    this.api.getCountCandidat().subscribe({
      next:value => {
        this.CountCandidatArray =value
        console.log(this.CountCandidatArray)
        this.count = this.CountCandidatArray.count
        this.barChartLabels=['Candidats','Recruteur']
        this.getCountRecruteur()
      }
    })
  }
  getCountRecruteur(){
    this.api.getCountRecruteur().subscribe({
      next:value => {
        this.CountRecruteurArray =value

        this.count1 = this.CountRecruteurArray.count
        this.countArray=[this.count,this.count1]
        console.log(this.countArray)
        this.barChartData= [
          {data: this.countArray, label: 'Nombre' ,backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
            hoverOffset: 4},

        ]

        this.areaChart()
      }
    })

  }




  areaChart(){

    this.chartBar=new Chart("myPieChart", {
      type: 'pie',
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
