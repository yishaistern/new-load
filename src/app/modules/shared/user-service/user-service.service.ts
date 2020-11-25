import { Injectable } from '@angular/core';
import { UserInterface } from '../objfiles';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user: UserInterface;
  constructor(private httpClient: HttpClient) {
    this.user = {
      userName: null
    };
  }

  /**
   * if ther is a looged in user return true if not than return false
   */
  isUserLogged(): boolean {
    if (this.user && this.user.userName) {
      return true;
    } else {
      return false;
    }
  }

  getUser(): Observable<UserInterface> {
    console.log(112233);
    return this.httpClient.post('http://localhost:3000/userState', {}).pipe(
      map((data: any) => {
        console.log(445566);
        console.log(data);
        this.user = data;
        return {userName: data.userName};
      })
    );
  }

}
