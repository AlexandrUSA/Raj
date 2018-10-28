import { Component, OnInit } from '@angular/core';
import { Card } from '../models';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  protected readonly imagesPath = `/assets/images/documents/`;

  documents: Card[] = [
    {
      title: `Сертификат продукции собственного производства`,
      imageSrc: `certificate.jpg`
    },
    {
      title: `Сертификат продукции собственного производства`,
      imageSrc: `certificate.jpg`
    },
    {
      title: `Сертификат продукции собственного производства`,
      imageSrc: `certificate.jpg`
    },
    {
      title: `Сертификат продукции собственного производства`,
      imageSrc: `certificate.jpg`
    }
  ];

  constructor() { }

  ngOnInit() {}

}
