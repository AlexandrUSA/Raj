import { Component, OnInit } from '@angular/core';
import { Card } from '@Shared/shared.model';
import { ApiService } from '@app/core/api.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent implements OnInit {
  protected readonly imagesPath = `/assets/images/documents/`;

  documents: Card[] = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.documents = this.api.getDocuments();
  }
}
