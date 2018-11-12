import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class FlightsService {

  flightstUrl = "./assets/flights.json";

  constructor( private http:Http ) { }

  getAllFlights(): Observable<Response> {
    return this.http.get(this.flightstUrl);
  }

  bookbtn: string = "false";
 

}
