import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Angular SSR && Prerendering');
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/home' },
      { name: 'og:title', content: 'Angular SSR && Prerendering' },
      {
        name: 'og:description',
        content:
          'Angular server side rendering or prerendering using angular universal',
      },
      {
        name: 'og:image',
        content: 'https://goo.gl/hfvwfq',
      },
    ]);
  }
}
