import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { from } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  // updating output binding property
  quotes: Quote[] = [
    new Quote(1, 'Life Quote', 'Keep looking up thats the secret of life', 'matata samuel', 'Hancel Asher', new Date(2020, 7, 23)),
    new Quote(2, 'Social Quote', 'Those who realize their folly are not true fools', 'Victor Manuel','Tony wein', new Date(2015, 4, 11))
  ];

  // click event binding
  toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    // make the event active
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  
  



  constructor() { }

  ngOnInit(): void {
  }

}
