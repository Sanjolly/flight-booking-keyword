import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'displeCrumble'
})

export class DisplayCrumblePipe implements PipeTransform {
    transform( value:string, destination:string, roundTrip:boolean ): string {
        if ( roundTrip ) {
            return value + ' > ' + destination + ' > ' + value;
        } else {
            return value + ' > ' + destination;
        }
    }
}