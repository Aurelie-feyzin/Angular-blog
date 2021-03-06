import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PostsService} from '../service/posts.service';

@Component({
  selector: 'app-nex-post',
  templateUrl: './new-post.component.html',
})
export class NewPostComponent {

  public newPost = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  public constructor(private fb: FormBuilder, public readonly postsService: PostsService) { }

  onSubmit() {
    this.postsService.addPost(this.newPost.getRawValue());
  }
}
