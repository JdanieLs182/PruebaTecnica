import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, arg: string): any {
    if (value && arg) {
      return value.filter((d) => d.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 || d.id == arg);
    }
    return value;
  }
}
