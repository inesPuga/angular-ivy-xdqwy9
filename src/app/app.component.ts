import { Component, VERSION, Input } from '@angular/core';
import { users } from '../data'
import { User } from './User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //name = 'Angular ' + VERSION.major;
  @Input() user;

  users;

  constructor(private http: HttpClient) {
    this.users = users;
  }

  ngOnInit() {
    this.http.get('');
  }

  logUser(user) {
    console.log(user.name);
  }

  onClickUser(user: User) {
    console.log("user " + user.name);
  }

}
