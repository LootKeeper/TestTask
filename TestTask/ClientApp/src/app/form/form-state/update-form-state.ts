import { FormState } from './form-state';
import { FormComponent } from '../form.component';
import { CreateFormState } from './create-form-state';

export class UpdateFormState implements FormState {

    _form: FormComponent;

    constructor(form: FormComponent) {
        this._form = form;
    }

    save(): void {
        this._updateModel();
    }

    reset(): void {
        this._form.setFormState(new CreateFormState(this._form));
        this._form.reset();
    }

    _updateModel(): void {
        this._form.dataService.updateEntity(this._form.model).subscribe(result => {
            this._form.model = result;
        })
    }

}
