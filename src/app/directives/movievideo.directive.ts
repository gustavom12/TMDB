import { Directive,ElementRef,OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Directive({
  selector: '[appMovievideo]'
})
export class MovievideoDirective implements OnInit{

  constructor(public el:ElementRef,private http: HttpClient) { 
  }
  $el:HTMLElement = this.el.nativeElement
  movie;
  @Input("appMovievideo") id:number

  
  

  ngOnInit(){
    let url = `https://api.themoviedb.org/3/movie/${this.id}/videos?api_key=4bab412957a2b13c2e912eb8e7e3f691&language=en-US`
    this.http.get(url).subscribe(
    (res:any)=> (this.movie = res ),
    (err) => console.log(err),
    ()=> {
    }
  )
    setTimeout(() => {
      if(this.movie.results[0])
      this.$el.insertAdjacentHTML("beforeend",`
    <a target="_blank" href="https://www.youtube.com/watch?v=${this.movie.results[0].key}" 
    class="fas fa-play"><a>  
    <h6 class="trailer text-center"> ${this.movie.results[0].name} <h6>
    
    <style>
      h6{
        position: relative;
        top: -30px;
      }
      a::before{
        font-size: 40px;
        position: relative;
        top: -130px;
        left: 140px;
        color: #ffffff;
        transition: all 0.2s linear;
      }
      a:hover{
        text-decoration: none !important;
      }
      a:hover:before{
        color: #dddddd ; 
        text-decoration: none;
        transition: all 0.2s linear;
        transform: scale(1.1);
      }
    </style>
    `)

    }, 1000);
    
  }
}
