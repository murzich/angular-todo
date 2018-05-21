import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {User} from './user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('/assets/user.json');
  }

  getUserList() {
    return this.http.get('/assets/user.json')
      .pipe(
        map((response => {
          let results: User[] = [];
          response.data.forEach(item => results.push(new User(item)));
          return results;
        }))
      );
  }
}
