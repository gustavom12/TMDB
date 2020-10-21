import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }
  key ="4bab412957a2b13c2e912eb8e7e3f691"
  ngOnInit(): void {
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
