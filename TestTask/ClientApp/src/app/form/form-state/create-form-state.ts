import { FormState } from './form-state';
import { FormComponent } from '../form.component';
import { UpdateFormState } from './update-form-state';
import { PlainModel } from '../../model/plain-model';

export class CreateFormState implements FormState {

    _form: FormComponent;

    get action(): string {
        return 'Create'
    }

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
        let model = this._overwriteNullFields(this._form.model);
        this._form.dataService.createEntity(model).subscribe(result => {
            if (result) {
                this._form.model = result;
            }
            else {
                this.reset();
            }
        })
    }

    // don't want to pass null values.
    _overwriteNullFields(model: PlainModel): PlainModel {
        if (model.firstSwitcher == null) model.firstSwitcher = false;
        if (model.secondSwitcher == null) model.secondSwitcher = false;

        return model;
    }
}
