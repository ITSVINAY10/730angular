import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  joke:any={}
  constructor(private hc:HttpClient) {
      this.hc.get('https://official-joke-api.appspot.com/random_joke').subscribe((data)=>this.joke=data)

   }
}
