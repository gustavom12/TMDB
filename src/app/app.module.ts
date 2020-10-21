import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { MainComponent } from './components/MainComponent/app.component';
import { MostPopularComponent } from './components/home/most-popular/most-popular.component';
import { TopRatedComponentComponent } from './components/home/top-rated-component/top-rated-component.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/home/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

import {RouteModule} from "./route/route.module";
import { OnloadDirective } from './directives/onload.directive';
import { MovieidComponent } from './components/movieid/movieid.component';
import { UpcomingComponent } from './components/home/upcoming/upcoming.component';
import { LatestComponent } from './components/home/latest/latest.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovievideoDirective } from './directives/movievideo.directive';
import { FavouritesComponent } from './components/favourites/favourites.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    MostPopularComponent,
    TopRatedComponentComponent,
    SearchComponent,
    HomeComponent,
    SearchPageComponent,
    OnloadDirective,
    MovieidComponent,
    UpcomingComponent,
    LatestComponent,
    FooterComponent,
    MovievideoDirective,
    FavouritesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
