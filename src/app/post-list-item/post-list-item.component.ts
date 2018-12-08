import { Component, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() post: Post;

  addLoveIt() {
    this.post.loveIts++;
  }

  removeLoveIt() {
    this.post.loveIts--;
  }

  getLoveIt() {
    let classCard = '{list-group-item: true';
    if (this.post.loveIts < 0) {
      classCard += ', list-group-item-danger';
    } else if (this.post.loveIts === 0) {
      classCard += '}';
    } else {
      classCard += ', list-group-item-success';
    }
    return classCard;
  }
}
