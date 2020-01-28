import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { PlainModel } from '../model/plain-model';
import { PlainEnum } from '../model/plain-enum';

@Component({
    selector: 'app-listing',
    templateUrl: './Listing.component.html',
    styleUrls: ['./Listing.component.css']
})
export class ListingComponent implements OnInit {

    _dataService: ModelService

    list: PlainModel[];
    filterEntity: PlainModel;
    modelEnums: PlainEnum[] = [PlainEnum.one, PlainEnum.two, PlainEnum.three];
    isLoading = true;

    constructor(dataService: ModelService) {
        this._dataService = dataService;
        this.reset();
    }

    ngOnInit() {
        this._dataService.getEntities().subscribe(result => {
            this.list = result;
            this.isLoading = false;
        })
    }

    reset() {
        this.filterEntity = new PlainModel();
    }
}
