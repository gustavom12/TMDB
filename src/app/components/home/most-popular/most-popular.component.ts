import {
  Component,
  OnInit
} from '@angular/core';
import { ServiciounoService } from '../../../servicios/serviciouno.service';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.sass'],
})
export class MostPopularComponent implements OnInit {
  getMovies;
  getMore20;
  constructor(private service: ServiciounoService) {
    this.getMovies = (pelis, url) => this.service.getMovies(pelis, url);
    this.getMore20 = (pelis, Url, i) => {
      this.i++;
      this.service.getFirts20(pelis, Url, i);
    };
  }
  //@ViewChild('voteAverage') $voteColor: any;
  //@ViewChild('votePercent') votePercent: any;

  //@ViewChildren("pelis")query: QueryList<SystemMessageComponent>
  x;
  key = '4bab412957a2b13c2e912eb8e7e3f691';
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  TrendingUrl =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=4bab412957a2b13c2e912eb8e7e3f691';
  MostPopularUrl =
    'https://api.themoviedb.org/3/movie/popular?api_key=4bab412957a2b13c2e912eb8e7e3f691';
  TopRatedUrl =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=4bab412957a2b13c2e912eb8e7e3f691';
  pelis = [];
  i = 2;

  ngOnInit() {
    this.getMovies(this.pelis, this.TrendingUrl);
    //this.$voteColor.style
  }
}
