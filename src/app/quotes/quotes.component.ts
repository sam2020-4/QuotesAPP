import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  // updating output binding property
  quotes: Quote[] = [
    new Quote(1, 'Time Quote', '"Time is the wisest counselor of all."','Pericles', 'matata samuel', new Date(2018, 7, 23)),
    new Quote(2, 'Friendship Quote', '“Friendship is the only cement that will ever hold the world together.”', 'Woodrow T. Wilson', 'ken joe', new Date(2015, 4, 11))
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
