import { Component, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {

  @Input() posts: Array<Post>;

}
