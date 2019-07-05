import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, lineChart } from 'chart.js';
import { ProjectService } from '../project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.scss']
})
export class ProjectDashboardComponent implements OnInit {
  @ViewChild('lineChart') private chartRef;
  @ViewChild('line2') private chartRef2;
  chart: any;
  chart2: any;

  constructor(private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {



    this.route.paramMap.pipe(switchMap(res => { return this.projectService.getProjectStats(res.get("id")) })).subscribe(data => {
      console.log(data)

      this.chart = new Chart(this.chartRef.nativeElement, {
        type: 'bar',
        data: {
          labels: ['#nr. completed tasks', 'Time spent', 'Estimated task time'],
          datasets: [
            {
              label: 'Weekly Overview - Week 52',
              data: [data.nr_completed_tasks, data.completed_time, data.completed_time_estimate],
              // borderColor: '#3cba9f',
              fill: false,
              backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'],
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    })



    this.chart2 = new Chart(this.chartRef2.nativeElement, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            backgroundColor: '#3cba9f',
            label: 'Points completed',
            data: [0, 10, 5, 2, 20, 30, 45],
            borderColor: '#3cba9f',
            fill: false
          },
          {
            label: 'tasks completed',
            data: [0, 3, 40, 20, 18, 15, 30],
            borderColor: '#aabaaa',
            backgroundColor: '#aabaaa',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

  }

}
