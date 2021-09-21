import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../../../auth/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private readonly endpoint: string = '/v1';

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public getRemove(api: string, queryParam?: any, method: 'get' | 'delete' = 'get'): Observable<any> {
    let url = `${this.endpoint}/${api}`;
    if(queryParam) {
      url = `${url}/${queryParam}`
    }
    return this.http[method](url, { headers: this.constructHeader() });
  }

  public constructHeader() {
    let bearerToken  = this.tokenService.getStoreToken("ACCESS_TOKEN");
    return new HttpHeaders(
      {
        "Content-Type": 'application/json',
        'Authorization': 'Bearer '+ bearerToken,
        "Accept": "application/json",
      })
  }

  public postPatch(api: string, data: any, method: 'post' | 'patch' = 'post'): Observable<any> {
    return this.http[method](`${this.endpoint}/${api}`, data , { headers: this.constructHeader()});
  }
}
