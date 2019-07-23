import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sportType'
})
export class SportTypePipe implements PipeTransform {

  transform(type: string, ...args: any[]): any {
    if (args[0] == 'icon') {
      switch (type) {
        case '1': return "fas fa-futbol";
        case '2': return "fas fa-baseball-ball";
        case '3': return "fas fa-football-ball"
        case '4': return "fas fa-basketball-ball";
        default: return "";
      }
    }
  }

}
