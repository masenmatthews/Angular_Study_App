import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ForumPost } from './forum.model';


@Injectable()
export class ForumService {

  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.posts = database.list('posts');
  }

  getPosts() {
  return this.games;
  }

  addPost(newPost: ForumPost) {
    this.posts.push(newPost);
  }

  getPostByKey(postId: string) {
  return this.database.object('posts/' + postId);
  }

  removePost(postId) {
  this.database.object(`/posts/${postId}`).remove();
}



}
