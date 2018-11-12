import { Component, OnInit, Input,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  @Input() origin: string;
  @Input() destination: string;
  @Input() roundTrip: boolean;
  @Input() filteredFlights: any[]=[];
  @Input() filter: boolean;
  @Input() departDate:Date;
  @Input() returnDate:Date;
  @Input() retunedFlights: any[]=[];


  oneWayFlightRadio: boolean = false;
  roundTripFlightRadio: boolean= false;
  oneWayFlightFare: number = 0;
  roundTripFlightFare:number = 0;
  displyBookBtn: boolean = false;
  totalFareAmount: number = 0;

  constructor() { }

  ngOnInit() {}

  radioChangeHandlerEvent( event: any )
  {
    
    let name = event.target.name;
    let amount =Number(event.target.value);
    
    if ( name == "oneWayFlightRadio" ) {
      this.oneWayFlightRadio = true;
      this.oneWayFlightFare = amount;
    }else {
      this.roundTripFlightRadio = true;
      this.roundTripFlightFare  = amount;
    } 

    if ( this.roundTrip) {
      this.displyBookBtn = (this.oneWayFlightRadio && this.roundTripFlightRadio) ? true: false;
      this.totalFareAmount =  this.oneWayFlightFare + this.roundTripFlightFare;
    } else {
      this.displyBookBtn = (this.oneWayFlightRadio) ? true: false;
      this.totalFareAmount =  this.oneWayFlightFare;
    }
    
  }
}
