import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cake-details-controls',
  templateUrl: './cake-details-controls.component.html',
  styleUrls: ['./cake-details-controls.component.scss'],
})
export class CakeDetailsControlsComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  private formatInput(input: string): string {
    const value = input.replace(/[^0-9]/g, '');
    return +value ? value : '1';
  }

  addValue(controlName: string, value: number = 1): void {
    const oldValue = this.formatInput(this.form.get(controlName).value);
    if (+oldValue === 1 && value === -1) {
      return;
    }
    let newValue = (+oldValue + value).toString();
    if (controlName === 'weight') {
      newValue = newValue + ' кг';
    }
    this.form.get(controlName).setValue(newValue);
  }

  onPersonsInput(e): void {
    this.form.get('persons').setValue(this.formatInput(e.target.value));
  }

  onWeightInput(e): void {
    this.form.get('weight').setValue(this.formatInput(e.target.value) + ' кг');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      persons: new FormControl('1'),
      weight: new FormControl('1 кг'),
    });
  }
}
