import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const basicUrl = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  register(data) : Observable<any>{
    return this.http.post<any>(`${basicUrl}/api/auth/sign-up`, data);
  }
}
