import { Component, OnInit } from '@angular/core';
import { Discussion } from './discussion.model';

import { DiscussionsService } from './discussions.service'; 
@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.css']
})


export class DiscussionsComponent implements OnInit {
  private discussions: Discussion[];
  constructor(private discussionsService : DiscussionsService) { }
  
  ngOnInit() {
    this.discussions = this.discussionsService.getDiscussions();
  }

}
