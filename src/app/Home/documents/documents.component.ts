import { Component, OnInit } from '@angular/core';
import { Card } from '../home.model';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  protected readonly imagesPath = `/assets/images/documents/`;

  documents: Card[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.documents = this.homeService.getDocuments();
  }

}
