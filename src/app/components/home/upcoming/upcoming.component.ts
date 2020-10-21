import { Component, OnInit } from '@angular/core';
import {ServiciounoService} from "../../../servicios/serviciouno.service"

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.sass']
})
export class UpcomingComponent implements OnInit {

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
  upcoming =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US&page=1";  pelis = [];
  i = 2;
  ngOnInit() {
    this.getMovies(this.pelis, this.upcoming);
  }

}
