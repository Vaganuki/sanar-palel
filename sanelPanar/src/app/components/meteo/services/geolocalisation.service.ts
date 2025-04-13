import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocalisationService {

  private readonly _http = inject(HttpClient);

  getAdressFromCoord(lat: number, lon: number) {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'User-Agent': 'hugo.warnotte@gmail.com'
    });

    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('format', 'json')
      .set('addressdetails', '1');

    return this._http.get('https://nominatim.openstreetmap.org/reverse', { headers, params });

  }

  getCoordFromAdress(adress: string) {
    const encodedAdress = encodeURIComponent(adress);
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAdress}`;
    return this._http.get(url);
  }

  constructor() { }
}
