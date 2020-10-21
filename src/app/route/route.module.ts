import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router"
import { HomeComponent } from '../components/home/home.component';
import { MovieidComponent } from "../components/movieid/movieid.component"
import { SearchPageComponent } from "../components/search-page/search-page.component"
import {FavouritesComponent} from "../components/favourites/favourites.component"

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "searchPage", component: SearchPageComponent},
  {path: "searchPage/:search", component: SearchPageComponent},
  {path: "movies/:id", component: MovieidComponent },
  {path: "Favourites", component: FavouritesComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RouteModule { 

}
