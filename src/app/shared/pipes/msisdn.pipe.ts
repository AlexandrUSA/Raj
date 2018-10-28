import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msisdn'
})
export class MsisdnPipe implements PipeTransform {

  transform(value: string): string {
    const str: string = value.replace(/[^0-9]/gim, '');
    const stateCode = str.substr(0, 3);
    const operatorCode = str.substr(4, 2);
    const longPart = str.substr(6, 3);
    const shortPart1 = str.substr(9, 2);
    const shortPart2 = str.substr(1, 2);
    return `+${stateCode} (${operatorCode}) ${longPart} ${shortPart1} ${shortPart2}`;
  }

}
