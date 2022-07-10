import { Component, VERSION, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'my-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: [  ]
})
export class UserDisplayComponent  {
  @Input() uuserr: User;
  @Input() user;
  @Input() index;
  selected = false;

  ngOnInit() {}

  logUser(user) {
    console.log(this.user);
  }

  onClickUser(uuserr) {
    console.log("user " + this.uuserr.name);
  }

  onClick() {
    this.selected = true;
  }

}