import { Injectable } from '@angular/core';
import {HttpClient , HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OpenweathermapServiceService {
  url = 'http://api.openweathermap.org/data/2.5'
  apiKey = '0effe12c904287abc2c33d76b6c0b624'
  currentTemp : any;
  tempsArr : any;
  public  tempList : any;
  constructor(private http:HttpClient) { }

  testService(){
    console.log("Weather service works");
  }

  getCurrentWeather(loc: string) {
    return this.http.get(`${this.url}/weather?q=${loc}&appid=${this.apiKey}`);
  }

  getForecast(loc: string) {
    return this.http.get(`${this.url}/forecast?q=${loc}&appid=${this.apiKey}`);
  }
  
  getCurrentTemp(){
      return this.currentTemp;
  }

  getTemperatureList(){
    return  this.tempList;
  }
}
