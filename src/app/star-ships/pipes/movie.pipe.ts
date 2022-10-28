import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie'
})
export class MoviePipe implements PipeTransform {

  transform(value: unknown): string {
    return `/assets/films/${value}film.jpg`
  }

}
