import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '8c42bcb71d1dd7f4';
  url;
  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = `http://api.wunderground.com/api/${this.apiKey}/conditions/q`
  }

  getWeather(city, state): Observable<any> {
    return this.http.get(`${this.url}/${state}/${city}.json`)
  }

}
