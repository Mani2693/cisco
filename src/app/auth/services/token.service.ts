import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { config } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly ACCESS_TOKEN = 'ACCESS_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  constructor(private http: HttpClient) { }

  // Get refresh token and store in localstorage
  public doLoginUser(tokens: string) {
    this.storeTokens(this.JWT_TOKEN, tokens);
    this.getAccessTokenOnlogin(tokens);
  }

  public storeTokens(name:string, token: any) {
    localStorage.setItem(name, token);
  }

  public getAccessTokenOnlogin(code: string) {
    var myHeaders = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "application/json"
    }

    let body = `grant_type=authorization_code&client_id=${config.OAUTH_CLIENT}&client_secret=${config.OAUTH_SECRET}&code=${code}&redirect_uri=${config.redirecturl}`;

    this.http.post('v1/access_token', body, {
      headers: myHeaders
    }).subscribe({
      next: (data: any) => {
        // Store access token
        this.storeTokens(this.ACCESS_TOKEN, data.access_token);

        // Store refresh token
        this.storeTokens(this.REFRESH_TOKEN, data.refresh_token);
      },
      error: console.error
    });
  }

  public getStoreToken(name: string) {
    return localStorage.getItem(name);
  }

  public clearToken(): Promise<Boolean> {
    return new Promise((resolve, reject)=>{
      localStorage.clear();
      resolve(true);
    })
  }

}
