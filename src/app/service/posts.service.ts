import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

export interface Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;
}

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    postsSubject = new Subject<Post[]>();

    private posts: Array<Post> = [
        {
            title: 'Le premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore' +
                'et dolore magna aliqua.',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Le deuxieme post',
            content: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,' +
                'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            loveIts: -1,
            created_at: new Date()
        },
        {
            title: 'Le dernier post',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, ',
            loveIts: 1,
            created_at: new Date()
        }
    ];

    public constructor(private readonly router: Router) {
    }

    public emitPostsSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    public deletePost(index: number) {
        this.posts.splice(index, 1);
        this.emitPostsSubject();
    }

    public addPost(newPost: Post) {
        newPost.loveIts = 0;
        newPost.created_at = new Date();
        this.posts.push(newPost);
        this.router.navigate(['/postsService']);
        this.emitPostsSubject();
    }

    public addLoveIts(index: number) {
        this.posts[index].loveIts++;
        this.emitPostsSubject();
    }

    public removeLoveIts(index: number) {
        this.posts[index].loveIts--;
        this.emitPostsSubject();
    }
}
