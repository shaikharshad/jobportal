import { Injectable    } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor( private http : HttpClient) { }


  url:any
  GetMainWall(){
    this.url = "https://jsonplaceholder.typicode.com/posts"

    return this.http.get(this.url);  }

}
