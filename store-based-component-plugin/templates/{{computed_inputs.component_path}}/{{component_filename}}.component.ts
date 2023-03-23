import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { {{facade_service_classname}} } from './services/facade/{{facade_filename}}.facade.service';

/**
 * @author Paulo W. A. Ferreira
 * @email paulo.almeida@zup.com.br
 *
 * This code it's a sample
 */

@Component({
  selector: '{{selector_name}}',
  templateUrl: './{{component_filename}}.component.html',
  styleUrls: ['./{{component_filename}}.component.scss']
})
export class {{component_classname}} implements OnInit {

  {{entity_store_camelcase_list}}: any | null | undefined = [];
  {{entity_store_camelcase + 'Selected'}}: any;
  {{entity_store_camelcase + 'Values'}}: any;
  form: FormGroup | any;
  formButtonLabel = 'Submit';
  showMode: 'edit' | 'view' = 'view';

  constructor(
    private {{facade_service_instance}}: {{facade_service_classname}},
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.{{facade_service_get_list}}();
  }

  clearFields() {
    this.createForm();
    this.{{entity_store_camelcase + 'Selected'}} = null;
    this.{{entity_store_camelcase + 'Values'}} = null;
    this.formButtonLabel = 'Submit';
  }

  create() {
    this.clearFields();
  }

  edit(id: number) {
    this.{{facade_service_instance}}.{{facade_service_get_item}}(id).subscribe({{entity_store_camelcase +'Found'}} => {
      this.{{entity_store_camelcase + 'Selected'}} = {{entity_store_camelcase +'Found'}};
      this.form.patchValue({ name: {{entity_store_camelcase +'Found'}}.name });
      this.form.patchValue({ breed: {{entity_store_camelcase +'Found'}}.breed });
      this.form.patchValue({ weight: {{entity_store_camelcase +'Found'}}.weight });
      this.form.patchValue({ years: {{entity_store_camelcase +'Found'}}.age.years });
      this.form.patchValue({ months: {{entity_store_camelcase +'Found'}}.age.months });
    });
    this.formButtonLabel = 'Update';
    this.showMode = 'edit';
    this.{{facade_service_get_list}}();
  }

  formatAge(age: any) {
    const years = age.years > 0 ? age.years + ' year(s)' : '';
    const months = age.months > 0 ? age.months + ' month(s)' : '';
    return years ? years + ' e ' + months : years;
  }

  showDetails(id: any) {
    this.{{facade_service_instance}}.{{facade_service_get_item}}(id).subscribe({{entity_store_camelcase}} => this.{{entity_store_camelcase + 'Selected'}} = {{entity_store_camelcase}});
    this.showMode = 'view';
  }

  saveEdit() {
    this.{{entity_store_camelcase + 'Values'}} = {
      id: this.{{entity_store_camelcase + 'Selected'}}?.id,
      name: this.form.get('name').value,
      breed: this.form.get('breed').value,
      weight: this.form.get('weight').value as number,
      age: {
        years: this.form.get('years').value as number,
        months: this.form.get('months').value as number
      }
    };

    this.formButtonLabel === 'Submit'
      ? this.{{facade_service_instance}}.{{facade_service_save_item}}(this.{{entity_store_camelcase + 'Values'}})
      : this.{{facade_service_instance}}.{{facade_service_edit_item}}(this.{{entity_store_camelcase + 'Values'}});

    this.createForm();
    this.formButtonLabel = 'Submit';
    this.showMode = 'view';
    this.{{entity_store_camelcase + 'Selected'}} = null;
    this.{{facade_service_get_list}}();
  }

  remove(id: number) {
    this.{{facade_service_instance}}.{{facade_service_remove_item}}(id);
    this.{{facade_service_get_list}}();
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

  private {{facade_service_get_list}}() {
    this.{{facade_service_instance}}.{{facade_service_get_list}}(true).subscribe({{entity_store_camelcase_list}} => {
      this.{{entity_store_camelcase_list}} = {{entity_store_camelcase_list}};
    });
  }
}
