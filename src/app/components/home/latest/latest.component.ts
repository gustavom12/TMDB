import { Component, OnInit } from '@angular/core';
import {ServiciounoService} from "../../../servicios/serviciouno.service"

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.sass']
})
export class LatestComponent implements OnInit {

  getMovies;
  getMore20;
  constructor(private service: ServiciounoService) {
    this.getMovies = (pelis, url) => this.service.getMovies(pelis, url);
    this.getMore20 = (pelis, Url, i) => {
      this.i++
      this.service.getFirts20(pelis, Url, i);}
  }
  //@ViewChild('Container') Container: any;
  x;
  key = '4bab412957a2b13c2e912eb8e7e3f691';
  Url =
    'https://api.themoviedb.org/3/movie/upcoming?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US&page=1';
  pelis = [];
  bgimg= "pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg"
  passbg(img){
    this.bgimg = img
    const $divimg = document.querySelector(".divimg")
    $divimg.classList.toggle("dnone");
    setTimeout(() => {
      $divimg.classList.toggle("dnone")
    }, 1);
  }
  i = 2;
  ngOnInit() {
    this.getMovies(this.pelis, this.Url);

  }

}
