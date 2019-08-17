import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { PlainModel } from '../model/plain-model';
import { PlainEnum } from '../model/plain-enum';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    _dataService: ModelService

    list: PlainModel[];
    filterEntity: PlainModel;
    modelEnums: PlainEnum[] = [PlainEnum.one, PlainEnum.two, PlainEnum.three];

    constructor(dataService: ModelService) {
        this._dataService = dataService;
        this.filterEntity = new PlainModel();
    }

    ngOnInit() {
        this._dataService.getEntities().subscribe(result => {
            this.list = result;
        })
    }

    reset() {
        this.filterEntity = new PlainModel();
    }
}
