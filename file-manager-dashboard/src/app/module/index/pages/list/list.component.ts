import { Component, OnInit } from '@angular/core';
import { IndexService } from '../../services/index.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  entity: any;

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.entity = 'Index Entity...';
  }

}
