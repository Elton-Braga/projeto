import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciais } from './credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  authenticate(creds : Credenciais){
    return this.http.post('${API_CONFIG.baseUrl}/login', creds, { 
      observe : "response",
      responseType : "text"
    })
  }
  sucessfullLogin(authToken : string){
    localStorage.setItem('Token', authToken)
  }

}
