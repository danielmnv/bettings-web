import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getProfit'
})
export class GetProfitPipe implements PipeTransform {
  
  transform(typeOf: boolean, ...args: number[]): any {
    let momio: number = args[0];
    let amount: number = args[1];
    return (momio == null || amount == null || momio == 0)? 0 : (typeOf)? 
      (momio / 100 * amount + amount).toFixed(2) : (100 / momio * amount + amount).toFixed(2);
  }

}
