import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'whitespaceRemoval'
})
export class WhitespaceRemovalPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/[\s.]+/g, '').toLowerCase();
  }
}
