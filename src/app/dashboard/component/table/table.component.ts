import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any[] = [];
  @Output() remove: EventEmitter<string> = new EventEmitter<string>();
  @Output() details: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(element: any) {
    this.remove.emit(element.id);
  }

  viewDetails(element: any) {
    this.details.emit(element.id);
  }
}
