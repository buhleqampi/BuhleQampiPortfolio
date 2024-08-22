import { Injectable } from '@angular/core';
import { Contact } from './../interfaces/contact'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://buhle-qampi-portfolio-api.vercel.app';


  constructor(private _http: HttpClient) {}

  sendMessage(data: Contact): Observable<Contact> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<Contact>(`${this.baseUrl}/email/send-message`, data);
  }
}



