import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'copeckaPipe'
})
export class CopeckaPipe implements PipeTransform {
  transform(amount: number) {

    const partials = (amount / 100).toString().split('.');
    const wholePart = partials[0].split('').reverse().join('');
    const dividedWholePart = wholePart.match(/.{1,3}/g);
    dividedWholePart.forEach((el, i) => dividedWholePart[i] = el.split('').reverse().join(''));
    let result = dividedWholePart.reverse().join(' ');
    if (partials[1]) {
      result = result + ', ' + partials[1] + (partials[1].length === 1 ? '0' : '');
    } else {
      result = result + ', 00';
    }
    return  `${result} руб.`;
  }
}
