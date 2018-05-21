import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  public users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserList().subscribe((res: User[]) => {
      this.users = res;
      console.log(this.users);
    }
    )
  }
}
