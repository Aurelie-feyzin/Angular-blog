import {Component, Input} from '@angular/core';
import {Post, PostsService} from '../service/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

  @Input() post: Post;
  @Input() index: number;

  public constructor(public postsService: PostsService) {
  }

  addLoveIt(index: number) {
    this.postsService.addLoveIts(index);
  }

  removeLoveIt(index: number) {
    this.postsService.removeLoveIts(index);
  }

  getLoveIt() {
    let classCard = 'list-group-item';
    if (this.post.loveIts < 0) {
      classCard += ', list-group-item-danger';
    }
    if (this.post.loveIts > 0) {
      classCard += ', list-group-item-success';
    }
    return classCard;
  }

  removePost(index: number) {
    this.postsService.deletePost(index);
  }
}
