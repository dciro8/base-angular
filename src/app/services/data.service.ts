
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private httpClientModule:HttpClientModule) { }

  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap(console.log)
    );
  }
}
