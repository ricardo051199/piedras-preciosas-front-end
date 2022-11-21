import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Piedra } from "../interfaces/piedra.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GemstoneService {

  private db_url: string = 'http://localhost:3000/piedras';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addGemstone(gemstone: Piedra): Observable<Piedra> {
    return this.http.post<Piedra>(this.db_url, gemstone, this.httpOptions);
  }
}
