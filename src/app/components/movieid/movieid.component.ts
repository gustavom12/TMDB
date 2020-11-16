import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ServiciounoService} from "../../servicios/serviciouno.service"
import {Movie} from "../../interface/movie-interface"
import {FavouritesService} from "../../servicios/favourites.service"

@Component({
  selector: 'app-movieid',
  templateUrl: './movieid.component.html',
  styleUrls: ['./movieid.component.sass']
})
export class MovieidComponent implements OnInit{
  id;
  movie:Movie[] = []; 
  url;
  isAlreadyFavourite:boolean;
  constructor(private router:Router, private route: ActivatedRoute,
    private service: ServiciounoService,
    private favservice: FavouritesService
    ){
      this.id = this.route.snapshot.paramMap.get("id")
      this.url= `https://api.themoviedb.org/3/movie/${this.id}?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US`
      this.service.getOnlyOne(this.movie, this.url)
    }

  getFavouriteMovie(){
    if (!localStorage.getItem('favourites')) return
    //This function returns false or true, if it is true, the favourite´s button on the view is yellow
    //if movie is not already defined, the function calls itself
    if(!this.movie[0]){ setTimeout(() =>this.getFavouriteMovie(),200);} 
    else this.isAlreadyFavourite = this.favservice.getArray(this.movie[0]).isAlready
  }

  ngOnInit(): void {
    this.getFavouriteMovie()
  }



  SetFavouriteMovie(movie:Movie){
    this.isAlreadyFavourite = this.favservice.pushArray(movie).togglevariable
  }
}
