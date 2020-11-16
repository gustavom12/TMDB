import { Injectable } from '@angular/core';
import { Movie } from '../interface/movie-interface';

@Injectable({
  providedIn: 'root',
})
export class FavouritesService {
  favourites = [];
  y = 0;
  constructor() {}
  //PUSH LOCALSTORAGE FAVOURITES ARRAY
  pushArray(movie: Movie) {
    //localStorage.clear()
    let togglevariable;
    //Create localStorage var if it is not created yet
    if (localStorage.getItem('favourites') === null) {
      localStorage.setItem('favourites', JSON.stringify([]));
    }

    this.favourites = JSON.parse(localStorage.getItem('favourites'));
    let isAlready = false;
    if (
      JSON.stringify(this.favourites).includes(JSON.stringify(movie)) === true
    ) {
      //REMOVE MOVIE IF IT IS ALREADY UPLOAD
      let index = this.favourites.indexOf(movie);
      console.log(
        'index',
        this.favourites.indexOf(movie),
        this.favourites.slice(index, 1)
      );
      this.favourites.splice(index, 1);
      localStorage.setItem(`favourites`, JSON.stringify(this.favourites));
      console.log(this.favourites, 'fav');
      togglevariable = false;
      return { togglevariable };
    } else {
      //UPLOAD MOVIE
      this.favourites.push(movie);
      localStorage.setItem(`favourites`, JSON.stringify(this.favourites));
      togglevariable = true;
      return { togglevariable };
    }
  }

  getArray(movie) {
    if (localStorage.getItem('favourites') === null) {
      return;
    } else {
      let isAlready = false;
      console.log(movie, 'movie');
      this.favourites = JSON.parse(localStorage.getItem('favourites'));

      console.log(
        JSON.stringify(this.favourites).includes(JSON.stringify(movie)),
        'asd2'
      );
      if (
        JSON.stringify(this.favourites).includes(JSON.stringify(movie)) === true
      ) {
        isAlready = true;
        return { isAlready };
      }
    }
  }

  removeMovie(movie:Movie){
    this.favourites = JSON.parse(localStorage.getItem('favourites'));
    let index = this.favourites.indexOf(movie);
      console.log(
        this.favourites,"fab1"
      );
      this.favourites.splice(index, 1);
      localStorage.setItem(`favourites`, JSON.stringify(this.favourites));
      console.log(this.favourites, 'fav');
  }

}
