import { FormState } from './form-state';
import { FormComponent } from '../../form/form.component';
import { UpdateFormState } from './update-form-state';
import { PlainModel } from '../plain-model';

export class CreateFormState implements FormState {

    _form: FormComponent;

    constructor(form: FormComponent) {
        this._form = form;
    }

    save(): void {
        this._createModel();
        this._form.setFormState(new UpdateFormState(this._form));
    }

    reset(): void {
        this._form.model = new PlainModel();
    }

    _createModel(): void {
        this._form.dataService.createEntity(this._form.model).subscribe(result => {
            this._form.model = result;
        })
    }
}
