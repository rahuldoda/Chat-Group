import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseUrl = 'http://localhost:8080/users/'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  login(loginParam: any): Observable<any> { 
   
    return this.http.post<any>(`${this.baseUrl}login`,{...loginParam});
  }

  getUserList(): Observable<any> { 
   
    return this.http.get<any>(`${this.baseUrl}`);
  }

  createUser(addUserParam:any): Observable<any> { 
   
    return this.http.post<any>(`${this.baseUrl}`,{...addUserParam});
  }
}
