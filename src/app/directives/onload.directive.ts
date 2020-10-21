import { Directive,ElementRef,OnInit,Input } from '@angular/core';

@Directive({
  selector: '[ShorterText]'
})
export class OnloadDirective implements OnInit{

  @Input() set appMultiplicar(numero: number) {
    for (var i = 0; i < numero; i++){
      console.log(i)
    }
      // If condition is true add template to DOM
 
  }

  constructor(
    public el:ElementRef,
  ) { }

    $el:HTMLElement = this.el.nativeElement

  @Input('ShorterText') text: string;
  @Input('slice') n:number;
  @Input("end") t:string;
  ngOnInit(){
    console.log(this.n)
     if(this.text.length>this.n){ 
        this.$el.textContent = this.text.slice(0,this.n)
        if(this.t)this.$el.textContent += this.t
      }
  }
}
