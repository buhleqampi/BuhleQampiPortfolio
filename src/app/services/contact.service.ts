import { Injectable } from '@angular/core';
import { Contact } from './../interfaces/contact';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'https://buhle-qampi-portfolio-api.vercel.app/';


  constructor(private _http: HttpClient) { }

  
  getAllProducts(): Observable<Contact> {
    return this._http.get<Contact>(`${this.baseUrl}/articles`);
  }
}



