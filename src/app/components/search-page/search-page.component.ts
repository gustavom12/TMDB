import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ServiciounoService} from "../../servicios/serviciouno.service";


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.sass']
})

export class SearchPageComponent implements OnInit {
  pelis=[]
  getMovies;
  search= ""; 
  constructor(private router:Router, private route: ActivatedRoute,
     private service: ServiciounoService) { 
      this.getMovies = (pelis, url) => this.service.getMovies(pelis, url);
     }
@ViewChild("input") $input: any
 
  goToSearchPage(){
    this.pelis = []
    this.search  = this.$input.nativeElement.value
    let Url=`https://api.themoviedb.org/3/search/movie?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US&query=${this.search}&page=1&include_adult=false`
    this.router.navigate(["/searchPage",this.search])
    this.getMovies(this.pelis,Url)
    //If results = 0 =
    setTimeout(() => {
      if(this.pelis.length > 0 && document.querySelector("#noresults")){
        document.querySelector("#noresults").innerHTML= ""
      }
      if(this.pelis.length === 0 && document.querySelector("#noresults") === null) {
      document.querySelector(".pelis").insertAdjacentHTML("beforeend",`
    <h2 id="noresults" class="text-center "> Results not found <h2>
    `
    )}
    }, 1000);
    
  }

  ngOnInit(): void {
    this.search = this.route.snapshot.paramMap.get("search")
    let Url=`https://api.themoviedb.org/3/search/movie?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US&query=${this.search}&page=1&include_adult=false`
    this.getMovies(this.pelis,Url)
    }

  onKeydownEvent(e){
      if (e.key === "Enter") {
        this.goToSearchPage()
    }
  }

}
