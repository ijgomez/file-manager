import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  private vista: string;

  private hiddenUploadButton = true;

  private hiddenAddButton = true;

  @Output()
  uploaded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set view(view: string) {
    this.vista = (view && view.trim()) || '<not view>';
    if (view === 'upload') {
      this.hiddenUploadButton = false;
      this.hiddenAddButton = true;
    } else if (view === 'index') {
      this.hiddenUploadButton = true;
      this.hiddenAddButton = true;
    } else {
      alert('View Not valid: ' + view);
    }
  }

  get view(): string { return this.vista; }

  onReolad(): void {
    this.uploaded.emit('reload');
  }

  onAdd(): void {
    this.uploaded.emit('add');
  }

  onUpload(): void {
    this.uploaded.emit('upload');
  }

  onExport(): void {
    this.uploaded.emit('export');
  }
}
