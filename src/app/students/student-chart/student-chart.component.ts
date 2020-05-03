import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-chart',
  templateUrl: './student-chart.component.html',
  styleUrls: ['./student-chart.component.css']
})
export class StudentChartComponent implements OnInit {

  // type: string;
  stacked: any[] = [];
  @Input() studentResult;
  weakCount:any;
  okCount:any;
  goodCount:any;
  excellentCount:any;

  constructor() {
    // this.randomStacked();
  }
  ngOnChanges() {
    this.stacked=[];
    this.organizedData();
    
  }
 
 
  ngOnInit() {
   
  }


  organizedData(){
    let data =this.studentResult;
    this.weakCount =((this.studentResult.filter(x=> x.values < 60 ).length / data.length) *100).toFixed(2);
    this.okCount=((this.studentResult.filter( x=> x.values>= 60 && x.values < 80).length / data.length) *100).toFixed(2);
    this. goodCount= ((this.studentResult.filter(x=> x.values>=80 && x.values<90).length / data.length) *100).toFixed(2);
    this. excellentCount= ((this.studentResult.filter(x=> x.values>= 90).length / data.length)*100).toFixed(2);
console.log(data.length);
    // this.stacked.push({
    //   weakCount, type: "default", label: weakCount + ' %'
    // });
    // this.stacked.push({
    //   okCount, type: "danger", label: okCount + ' %'
    // });
    // this.stacked.push({
    //   goodCount, type: "warning", label: goodCount + ' %'
    // });
    // this.stacked.push({
    //   excellentCount, type: "success", label: excellentCount + ' %'
    // });
    // console.log(this.stacked);
    // console.log(weakCount.length);
    // console.log(okCount.length);
    // console.log(goodCount.length);
    // console.log(excellentCount.length);
  }

  // randomStacked(): void {
  //   let types = ['success', 'info', 'warning', 'danger'];
 
  //   this.stacked = [];
  //   let n = Math.floor(Math.random() * 4 + 1);
  //   for (let i = 0; i < n; i++) {
  //     let index = Math.floor(Math.random() * 4);
  //     let value = Math.floor(Math.random() * 27 + 3);
  //     this.stacked.push({
  //       value,
  //       type: types[index],
  //       label: value + ' %'
  //     });
  //   }
  // }

}
