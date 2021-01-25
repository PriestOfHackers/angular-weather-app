import { Component, OnInit } from '@angular/core';
import {OpenweathermapServiceService} from '../openweathermap-service.service';
import { Observable } from 'rxjs';
import {HttpClient , HttpParams} from '@angular/common/http';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';

export interface PeriodicElement {
  date: string;
  forecast: number;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [OpenweathermapServiceService]
})


export class TableListComponent implements OnInit {


  //variables for displaying data on the data and getting it from the service call
  displayedColumns: string[] = ['date', 'forecast'];
  dataSource = [];
  currentTemp : any;
  tempsArr : any;
  tempList : any;
  tableArr : any[] = [];
  tableData: PeriodicElement[] = [];


  //variables  needed to make the service call to openweathermap api
  url = 'http://api.openweathermap.org/data/2.5'
  apiKey = '0effe12c904287abc2c33d76b6c0b624'
  loc = "Cape Town";
  unit = "metric"


  //variables to do logic on when to open dialogs
  displayTable: boolean = true;
  tempLimits : boolean = false;
  selectedLevel: any;
 
  constructor(
  private http:HttpClient,
  public dialog: MatDialog,
    private dialogRef: MatDialogRef<DialogElementsExampleDialog>) {}

  ngOnInit(): void {
    this.getCurrentWeather(this.loc);
    this.getForecast(this.loc);
    
  }

  openNetworkDialog() {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getCurrentWeather(loc: string) {
    return this.http.get(`${this.url}/weather?q=${loc}&appid=${this.apiKey}&units=metric`).subscribe( data =>{
        console.log("getCurrentWeather() success");

        this.currentTemp = data;

        if(this.currentTemp.main.temp < 15 || this.currentTemp.main.temp > 25){
          this.tempLimits = true;
          this.openNetworkDialog();
        }
        console.log(this.tempLimits);
    },
    err => {
        console.log("getCurrentWeather() error");
        console.log(err);
    })
  }

  getForecast(loc: string) {
    return this.http.get(`${this.url}/forecast?q=${loc}&appid=${this.apiKey}&units=${this.unit}`).subscribe(data =>{
      console.log("getForecast() success");
      this.tempsArr = data;
      this.tempList = this.tempsArr.list;
      this.displayTable = true;
      this.populateTableData(this.tempList);
  },
  err => {
      console.log("getForecast() error");
      console.log(err);
      this.displayTable = false;
  })
  }

  populateTableData(data: any){
    var i:number;

    for(i = 0 ; i < 40 ; i++){
        this.tableData.push(data[i]);
    }

    this.tableData = data;

    console.log(this.tableData);
  }


  selected(event: any){
 

    if(event.target.value == 'celsius'){
          this.unit = "metric";
          this.getForecast(this.loc);
    }else if(event.target.value == 'fahrenheit'){
          this.unit = "imperial";
          this.getForecast(this.loc);
    }

    console.log(event.target.value)
  }
}


@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}