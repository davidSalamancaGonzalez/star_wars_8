import { Pipe, PipeTransform } from '@angular/core';
import { Ships } from '../interfaces/ships.interface';

@Pipe({
  name: 'UrlPipe'
})
export class UrlPipe implements PipeTransform {

  transform(ship: Ships) {
    let reg = /['0-9']/ig;
    let result = ship.url.slice(ship.url.length - 4, ship.url.length -1).match(reg)?.join('')
  console.log(result);
    return result;
  }

}
