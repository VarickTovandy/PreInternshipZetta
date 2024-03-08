import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accentRemoval'
})
export class AccentRemovalPipe implements PipeTransform {
  transform(value: string): string {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}
