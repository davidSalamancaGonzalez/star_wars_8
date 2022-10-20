import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
  
    return `${value}${args}.jpg`;
  }

}
