import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})

export class ServiciounoService{
  totalAngularPackages; // <---
  url: string = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
  key: string = '4bab412957a2b13c2e912eb8e7e3f691';
  nombre2;
  pelis2;
  x;
  youtubeVideoUrl = "https://www.youtube.com/watch?v="

  constructor(private http: HttpClient) {} // <---
  getMovies = (pelis, url) =>
    this.http.get(url).subscribe(
      (res:any) => (pelis.push(...res.results)),
      (err) => {
        console.log(err.statusText);
      },
      () => {
       // console.log(pelis);
      }
    );
  getFirts20(pelis, Url, i) {
    this.getMovies(pelis, `${Url}&page=${i}`);
  }
  getOnlyOne = (movie,url)=>
    this.http.get(url).subscribe(
      (res:any)=> (movie.push(res) ),
      (err) => console.log(err),
      ()=> {return movie}
    )

}
