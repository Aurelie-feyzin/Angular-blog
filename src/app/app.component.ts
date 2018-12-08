import {Component} from '@angular/core';

export interface Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  posts: Array<Post> = [
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
}
