import { Component, OnInit,ViewChild } from '@angular/core';
//import {ServiciounoService} from "../../servicios/serviciouno.service";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'MainComponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})



export class MainComponent {
  constructor(private http: HttpClient) {}
  @ViewChild('Container') Container: any;
  //@ViewChildren("pelis")query: QueryList<SystemMessageComponent>
  x;
  i = 1
    getMovies = (pelis,url)=> this.http
      .get(
        url
      )
      .subscribe(
        (res) => (this.x = res),
        (err) => {
          console.log(err,this.Container.nativeElement)
          this.Container.nativeElement.innerHTML= `<h2 class="text-center">Error:${err.statusText}</h2>`
        },
        () => {
          console.log('pelis', this.x)
            pelis.push(...this.x.results)
          console.log(pelis);
        }
      );
   getFirts20(pelis,Url){
     this.i++
     console.log(`${Url}&page=${this.i}`)
    if(pelis.length === 2)this.getMovies(pelis,`${Url}&page=${this.i}`)   
    if(pelis.length === 5)this.getMovies(pelis,`${Url}&page=${this.i}`)
    else this.getMovies(pelis,`${Url}&page=${this.i}`)
   }



   // <---
 

}


