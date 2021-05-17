import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  get(params?: any) {
    let httpParams = new HttpParams();
    if(params){
      params.forEach((p) => {
        httpParams = httpParams.append(p.param_name, p.param_value);
      });
    }
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100', { params: httpParams });
  }
}
