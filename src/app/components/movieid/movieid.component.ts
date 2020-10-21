import { AfterViewChecked, Component, OnInit } from '@angular/core';
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
  movie = []; 
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

  ngOnInit(): void {
    //localStorage.clear()
    //console.log("get",localStorage.getItem("favourites"))
    setTimeout(() => {
     this.getFavouriteMovie() 
     
    }, 500);
    
    setTimeout(() => {
      console.log(this.isAlreadyFavourite)
    }, 10000);

  }


  getFavouriteMovie(){
    this.isAlreadyFavourite = this.favservice.getArray(this.movie[0]).isAlready
  }

  SetFavouriteMovie(movie:Movie){
    //this.favservice.pushArray(movie);
    this.isAlreadyFavourite = this.favservice.pushArray(movie).togglevariable
  }
}
