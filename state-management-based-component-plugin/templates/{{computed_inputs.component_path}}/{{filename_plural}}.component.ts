import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { {{ facade_service_pascal }} } from './services/{{ filename }}.facade.service';

/**
 * @author Paulo W. A. Ferreira
 * @email paulo.almeida@zup.com.br
 *
 * This code it's a sample
 */

@Component({
  selector: 'app-{{ filename_plural }}',
  templateUrl: './{{ filename_plural }}.component.html',
  styleUrls: ['./{{ filename_plural }}.component.scss']
})
export class {{ component_name }} implements OnInit {

  {{ entity_camel_plural }}: any | null | undefined = [];
  {{ entity_camel + 'Selected' }}: any;
  {{ entity_camel + 'Values' }}: any;
  form: FormGroup | any;
  formButtonLabel = 'Submit';
  showMode: 'edit' | 'view' = 'view';

  constructor(
    private {{ facade_service_calmel }}: {{ facade_service_pascal }},
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.get{{ entity_pascal_plural }}();
  }

  clearFields() {
    this.createForm();
    this.{{ entity_camel + 'Selected' }} = null;
    this.{{ entity_camel + 'Values' }} = null;
    this.formButtonLabel = 'Submit';
  }

  create() {
    this.clearFields();
  }

  edit(id: number) {
    this.{{ facade_service_calmel }}.{{ get_item }}(id).subscribe({{ entity_camel +'Found' }} => {
      this.{{ entity_camel + 'Selected' }} = {{ entity_camel +'Found' }};
      this.form.patchValue({ name: {{ entity_camel +'Found' }}.name });
      this.form.patchValue({ breed: {{ entity_camel +'Found' }}.breed });
      this.form.patchValue({ weight: {{ entity_camel +'Found' }}.weight });
      this.form.patchValue({ years: {{ entity_camel +'Found' }}.age.years });
      this.form.patchValue({ months: {{ entity_camel +'Found' }}.age.months });
    });
    this.formButtonLabel = 'Update';
    this.showMode = 'edit';
    this.get{{ entity_pascal_plural }}();
  }

  formatAge(age: any) {
    const years = age.years > 0 ? age.years + ' year(s)' : '';
    const months = age.months > 0 ? age.months + ' month(s)' : '';
    return years ? years + ' e ' + months : years;
  }

  showDetails(id: any) {
    this.{{ facade_service_calmel }}.{{ get_item }}(id).subscribe({{ entity_camel }} => this.{{ entity_camel + 'Selected' }} = {{ entity_camel }});
    this.showMode = 'view';
  }

  saveEdit() {
    this.{{ entity_camel + 'Values' }} = {
      id: this.{{ entity_camel + 'Selected' }}?.id,
      name: this.form.get('name').value,
      breed: this.form.get('breed').value,
      weight: this.form.get('weight').value as number,
      age: {
        years: this.form.get('years').value as number,
        months: this.form.get('months').value as number
      }
    };

    this.formButtonLabel === 'Submit'
      ? this.{{ facade_service_calmel }}.{{ save_item }}(this.{{ entity_camel + 'Values' }})
      : this.{{ facade_service_calmel }}.{{ edit_item }}(this.{{ entity_camel + 'Values' }});

    this.createForm();
    this.formButtonLabel = 'Submit';
    this.showMode = 'view';
    this.{{ entity_camel + 'Selected' }} = null;
    this.get{{ entity_pascal_plural }}();
  }

  remove(id: number) {
    this.{{ facade_service_calmel }}.{{ remove_item }}(id);
    this.get{{ entity_pascal_plural }}();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      breed: new FormControl(''),
      weight: new FormControl(0),
      years: new FormControl(0),
      months: new FormControl(0)
    })
  }

  private get{{ entity_pascal_plural }}() {
    this.{{ facade_service_calmel }}.{{ get_list }}(true).subscribe({{ entity_camel_plural }} => {
      this.{{ entity_camel_plural }} = {{ entity_camel_plural }};
    });
  }
}
