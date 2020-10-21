import { Component, Host, OnInit, ViewChild } from '@angular/core';
// usar @Host para imports de componentes padres
import { ServiciounoService } from '../../../servicios/serviciouno.service';

@Component({
  selector: 'app-top-rated-component',
  templateUrl: './top-rated-component.component.html',
  styleUrls: ['./top-rated-component.component.sass'],
})
export class TopRatedComponentComponent implements OnInit {
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
  TopRatedUrl =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=4bab412957a2b13c2e912eb8e7e3f691';
  pelis = [];
  i = 2;
  ngOnInit() {
    this.getMovies(this.pelis, this.TopRatedUrl);
  }
}
