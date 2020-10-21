import { AfterContentInit, AfterViewChecked, AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewChecked {

  constructor(private router: Router) { }

  toggle(){
    const $navbarContent = document.querySelector(".nav-content")
    $navbarContent.classList.toggle('active')
  }

  scrollToElement(el){
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  trending;
  Trailers;
  ngAfterViewChecked(): void {
    this.trending = document.querySelector(".Containerrr")
    this.Trailers = document.querySelector(".latestContainer")
  }
  @ViewChild("input") $input: any
  
  goToSearchPage(){
    const search  = this.$input.nativeElement.value
    this.router.navigate(["/searchPage",search])
  }

  onKeydownEvent(e){
    if (e.key === "Enter") {
      this.goToSearchPage()
  }
}

}
