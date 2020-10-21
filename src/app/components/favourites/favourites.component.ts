import { Component, OnInit } from '@angular/core';
import {FavouritesService} from "../../servicios/favourites.service"

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.sass']
})
export class FavouritesComponent implements OnInit {

  constructor(
     public favservice: FavouritesService
     ) { }

  movies = JSON.parse(localStorage.getItem("favourites"))
  noneMovie = false;
  ngOnInit(): void {
    console.log(this.movies)
    if(this.movies.length <= 0 ){ this.noneMovie = true }
  }

  deleteAll(){
    this.movies = []
    localStorage.setItem("favourites", JSON.stringify(this.movies))
    this.noneMovie = true
  }

  removeOnlyOne(movie){
    console.log(movie)
    this.favservice.removeMovie(movie)
    this.movies = JSON.parse(localStorage.getItem("favourites"))
  }

}
