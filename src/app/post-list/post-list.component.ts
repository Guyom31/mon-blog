import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts = 0;

  showPostLoveIts = false;

  createdAt = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 5000
    );
  });

  constructor() { }

  ngOnInit() {
  }

  getLoveIt() {
    return this.postLoveIts;
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red';
    }
  }

  onUpLog() {
    this.showPostLoveIts = true;
    return this.postLoveIts = this.postLoveIts + 1;
  }

  onDownLog() {
    this.showPostLoveIts = true;
    return this.postLoveIts = this.postLoveIts - 1;
  }

}
