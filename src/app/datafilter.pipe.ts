import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterPipe'
})

export class DataFilterPipe implements PipeTransform{
    transform(items:any[], value:string) {
        if(!items || !value){
            return items;
        }
        return items.filter(d => {
            d.Name.toString().toLowerCase().includes(value.toString().toLowerCase())
        })
    }

}