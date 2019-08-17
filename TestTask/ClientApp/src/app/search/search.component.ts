import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { PlainModel } from '../model/plain-model';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    _dataService: ModelService

    list: PlainModel[];

    constructor(dataService: ModelService) {
        this._dataService = dataService;
    }

    ngOnInit() {
        this._dataService.getEntities().subscribe(result => {
            this.list = result;
        })
    }
}
