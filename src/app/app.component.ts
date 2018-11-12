import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { FlightsService } from './flights.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedNav: string = "one-way";
  MaxPassengers: number = 10;
  departDate: Date;
  returnDate: Date;
  origin:string;
  destination:string;
  passengers:number = 1;
  datePickerConfig: Partial<BsDatepickerConfig>;
  allFlights: any[];
  filteredFlights: any[];
  retunedFlights: any[];
  return : boolean = false;
  filter: boolean = false;

  constructor( private flightsService:FlightsService ){
    
    this.datePickerConfig = Object.assign({}, {
        containerClass:'theme-dark-blue',
        showWeekNumbers:false,
        minDate: new Date(),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  ngOnInit( ) {
    this.flightsService.getAllFlights().subscribe(
      (data) => {
        if ( data ) {
          this.allFlights = data.json();
        }
      }
    )
  }
  navChangeEventHandler( value: string ) {
    this.selectedNav=value;
    if ( value=="one-way") {
      this.return=false;
    } else {
      this.return=true;
    }
     
    this.filter=false; 
  }
  
  onSubmit() {
    this.filter = true;
    if ( this.allFlights.length ) {

      let ddate             = new Date(this.departDate);
      let departDateString  = new Date(ddate.getTime() - (ddate.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];
      

      this.filteredFlights = this.allFlights.filter( flight => flight.origin == this.origin && flight.destination == this.destination && flight.departure_date == departDateString );
  
      if ( this.return ) {
        let rdate       = new Date(this.returnDate);
        let returnDateString = new Date(rdate.getTime() - (rdate.getTimezoneOffset() * 60000 )).toISOString().split("T")[0];

        this.retunedFlights = this.allFlights.filter( flight => flight.origin == this.destination && flight.destination == this.origin && flight.departure_date == returnDateString );
      }
    }
  }
}
