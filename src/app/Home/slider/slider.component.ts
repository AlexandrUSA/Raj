import { Component, OnInit } from '@angular/core';

interface SlideControl {
  title: string;
  description: string;
}


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  selectedControl = 0;
  slideControls: SlideControl[] = [
    {
      title: `Какой-то длинный заголовок 1`,
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nam eos cupiditate laborum maxime itaque sapiente ad alias rem quidem.`
    },
    {
      title: `Какой-то длинный заголовок 2`,
      description:  `Sit amet consectetur adipisicing elit. Vel nam eos cupiditate laborum maxime itaque sapiente ad alias rem quidem.`
    },
    {
      title: `Какой-то длинный заголовок 3`,
      description: `um maxime itaque sapiente ad alias rem quidem. fgfd`
    }
  ];

  constructor() { }

  ngOnInit() {}

}
