import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";
import { HttpHandler } from "@angular/common/http/src/backend";
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

const headers = new HttpHeaders().set('Content-Type','application/json');
const passthrough = ["login", "signup"];

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient,public jwtHelper: JwtHelperService) {
    console.log('Api Service Started');
  }

  get(url, params = {}): Observable<any> {
    const options: any = {headers: headers,responseType: 'json'};
    const apiUrl = ApiService.buildUrl(url);
    options.params = this.toQuery(params);
    return this.httpClient.get(apiUrl, options).map(res => res);
  }

  post(url, params = {}): Observable<any> {
    const apiUrl = ApiService.buildUrl(url);
    const body = this.toBody(params);
    return this.httpClient.post(apiUrl, body,{headers: headers}).map(res => res);
  }

  put(url, params = {}): Observable<any> {
    const apiUrl = ApiService.buildUrl(url);
    const body = this.toBody(params);
    return this.httpClient.put(apiUrl, body,{headers: headers}).map(res => res);
  }

  delete(url): Observable<any> {
    const apiUrl = ApiService.buildUrl(url);
    return this.httpClient.delete(apiUrl,{headers: headers}).map(res => res);
  }

  login(email: string, password: string) {
    return this.post("login", { email, password }).do(res => (localStorage.setItem('access_token',JSON.parse(JSON.stringify(res)).result.token)));
  }

  logout() {
    this.post("logout").do(() => (localStorage.removeItem('access_token')));
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  static getToken(): string {
    return localStorage.getItem('access_token');
  }

  static buildUrl(path) {
    return ApiService.isBasePath(path) ? path : `${environment.apiPath}/${path}`;
  }

  static isBasePath(path) {
    return path.startsWith("http://") || path.startsWith("https://");
  }

  private toBody = (params: Object): string =>
    params ? JSON.stringify(params) : "";
  private toQuery(
    params: Object | any[],
    key: string = null,
    search = new URLSearchParams("")
  ): URLSearchParams {
    if (params === undefined) {
      return search;
    }
    if (params instanceof Array && key) {
      // If it is an array, add brackets with the indexes: param[0]: value
      params.forEach(
        (p, i) => (search = this.toQuery(p, `${key}[${i}]`, search))
      );
    } else if (params instanceof Object) {
      // If it is an object, add brackets wit the keys: param[key]: value
      Object.keys(params).forEach(
        objKey =>
          (search = this.toQuery(
            params[objKey],
            key ? `${key}[${objKey}]` : objKey,
            search
          ))
      );
    } else if (key) {
      // If the value is not an object nor and array, just append it with its key
      if (params === true) {
        // Transforming trues to 1
        search.append(key, "1");
      } else if (params === false) {
        // And falses to 0 (if necessary)
        search.append(key, "0");
      } else {
        search.append(key, params);
      }
    }
    return search;
  }
}
