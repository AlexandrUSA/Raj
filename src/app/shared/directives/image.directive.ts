import { Directive, Input, HostListener, HostBinding } from '@angular/core';

// TODO: Потом доделать. Глобальный обработчик ошибки загрузки картинки (если не загрузилась - грузим default)
@Directive({
  selector: 'img[default]'
})
export class ImageDirective {
  @HostBinding('src') src;
  @Input() default: string;
  @HostListener('error')
  errorHandler () {
    console.log('Errore!!!');
    this.src = this.default;
  }

}
