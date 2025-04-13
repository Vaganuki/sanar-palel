import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  private readonly _http: HttpClient = inject(HttpClient);

  constructor() {}

  getWeather(lat: number, lon: number): Observable<any> {
    const params = new HttpParams()
        .set('latitude', lat.toString())
        .set('longitude', lon.toString())
        .set('daily', 'temperature_2m_max,temperature_2m_min,sunshine_duration')
        .set('timezone', 'auto');

    return this._http.get('https://api.open-meteo.com/v1/forecast', { params });
  }}
