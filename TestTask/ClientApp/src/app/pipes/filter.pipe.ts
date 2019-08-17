import { Pipe, PipeTransform } from '@angular/core';
import { PlainModel } from '../model/plain-model';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(models: PlainModel[], filterEntity: PlainModel): PlainModel[] {
        if (!models) return [];
        if (!filterEntity) return models;

        return models.filter(model => {
            let conditions = [];
            if (filterEntity.name)
                conditions.push(model.name.toLowerCase().includes(filterEntity.name.toLowerCase()));

            if (filterEntity.date)
                conditions.push(this._compareDate(model.date, filterEntity.date));

            if (this._isFieldContainsValue(filterEntity.enum))
                conditions.push(model.enum == filterEntity.enum);

            if (this._isFieldContainsValue(filterEntity.firstSwitcher))
                conditions.push(model.firstSwitcher == filterEntity.firstSwitcher);

            if (this._isFieldContainsValue(filterEntity.secondSwitcher))
                conditions.push(model.secondSwitcher == filterEntity.secondSwitcher);

            if (this._isFieldContainsValue(filterEntity.range))
                conditions.push(model.range == filterEntity.range);

            if (conditions.length > 0) {
                return conditions.every(condition => condition);
            }

            return true;
        })


    }

    _compareDate(firstDate: Date, secondDate: Date): boolean {
        return firstDate == secondDate;
    }

    _isFieldContainsValue(field: any): boolean {
        return field != undefined && field != null;
    }
}
