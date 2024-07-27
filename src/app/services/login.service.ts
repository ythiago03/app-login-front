import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';
import { API_CONFIG } from '../../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  basePath: string = '/auth'


  constructor(
    private httpClient: HttpClient
  ) { 

  }

  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(
      `${API_CONFIG.baseUrl}${this.basePath}/login`,
      {
        email, 
        password
      }
    ).pipe(
      tap(
        (value) => {
          sessionStorage.setItem("auth-token", value.token)
          sessionStorage.setItem("username", value.name)
        }
      )
    )
  }

  signUp(name: string, email: string, password: string){
    return this.httpClient.post<LoginResponse>(
      `${API_CONFIG.baseUrl}${this.basePath}/register`,
      {
        name,
        email, 
        password
      }
    ).pipe(
      tap(
        (value) => {
          sessionStorage.setItem("auth-token", value.token)
          sessionStorage.setItem("username", value.name)
        }
      )
    )
  }
}
