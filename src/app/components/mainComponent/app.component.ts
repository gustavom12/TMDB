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
          this.Container.nativeElement.innerHTML= `<h2 class="text-center">Error:${err.statusText}</h2>`
        },
        () => {
            pelis.push(...this.x.results)
        }
      );
   getFirts20(pelis,Url){
     this.i++
    if(pelis.length === 2)this.getMovies(pelis,`${Url}&page=${this.i}`)   
    if(pelis.length === 5)this.getMovies(pelis,`${Url}&page=${this.i}`)
    else this.getMovies(pelis,`${Url}&page=${this.i}`)
   }
}


