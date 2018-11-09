import { Component, OnInit } from '@angular/core';
import {Social} from '../../../Home/home.model';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  form: FormGroup;
  categories: string[] = [`Детские торты`, `Торты на день рождения`, `Свадебные торты`, `Свадебные торты`, `Праздничные торты`];
  socials: Social[] = [
    {
      type: `Facebook`,
      link: `www.fb.com/ura`
    },
    {
      type: `Vkontakte`,
      link: `www.vk.com/ura`
    },
    {
      type: `Instagram`,
      link: `www.ig.com/ura`
    },
  ];

  msisdn = `+375449856985`;
  address = `г. Москва 1-й Институтский проезд, д.3 с.10`;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit (): void {
    if (this.form.valid) {
      alert('sending');
    } else {
      this.form.get('email').markAsTouched();
    }
  }

}
