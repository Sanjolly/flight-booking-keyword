import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlightsComponent } from './flights/flights.component';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { FlightsService } from './flights.service';
import { DisplayCrumblePipe } from './flights/displayCrumble.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    DisplayCrumblePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
