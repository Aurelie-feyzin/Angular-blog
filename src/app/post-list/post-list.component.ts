import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post, PostsService} from '../service/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit, OnDestroy {

  public allPosts: Array<Post>;
  postsSubscription: Subscription;

  public constructor(public postsService: PostsService) {}

  public ngOnInit(): void {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
        posts => {
          this.allPosts = posts;
        }
    );
    this.postsService.emitPostsSubject();
  }

  public ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
