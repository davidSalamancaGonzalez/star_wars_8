import { Pipe, PipeTransform } from '@angular/core';
import { ShipsService } from '../services/ships.service';

@Pipe({
  name: 'pilots'
})
export class PilotPipe implements PipeTransform {

  constructor(private shipsService : ShipsService){

  }

  transform(value: string): string {  
    
    return `/assets/pilots/${this.shipsService.cutPilotID(value)}.webp`
  }

}