import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private indexService: IndexService) { }

  ngOnInit() { }

  buttonAction(event): void {
    alert('event: ' + event);
  }
}
