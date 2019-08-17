import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { FormState } from './form-state/form-state';
import { PlainModel } from '../model/plain-model';
import { PlainEnum } from '../model/plain-enum';
import { CreateFormState } from './form-state/create-form-state';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    dataService: ModelService;
    model: PlainModel;

    modelEnums: PlainEnum[] = [PlainEnum.one, PlainEnum.two, PlainEnum.three];

    _formState: FormState;

    constructor(dataService: ModelService) {
        this.dataService = dataService;
        this.model = new PlainModel();
        this._formState = new CreateFormState(this);
    }

    ngOnInit() {
    }

    setFormState(formState: FormState) {
        this._formState = formState;
    }

    save(): void {
        this._formState.save();
    }

    reset(): void {
        this._formState.reset();
    }
}
