import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../interfaces/user-interface';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  private users = new BehaviorSubject<User[]>([]);
  public users$: Observable<User[]> = this.users.asObservable();

  private user = new BehaviorSubject<User>({
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });
  public user$: Observable<User> = this.user.asObservable();

  constructor(private http: HttpClient) {
    this.fetchUsers()
  }

  fetchUsers(): void {
    this.http.get<User[]>(`${this.baseUrl}/users`).subscribe(users => {
      this.users.next(users);
    });
  }

  getUserById(id: number) {
    if(id > 10) {
      id = 10;
    }
    this.http.get<User>(`${this.baseUrl}/users/${id}`).subscribe(user => {
      this.user.next(user);
    });
  }

  addData(newData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, newData, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 201) {
            const updatedUsers = [...this.users.value, response.body];
            this.users.next(updatedUsers);
            return response.body;
          } else {
            throw new Error('Failed to add data: Unexpected status code');
          }
        }),
        catchError(error => {
          console.error('Failed to add data:', error);
          return throwError('Failed to add data: ' + error.message);
        })
      );
  }

  editData(id: number, updatedData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/users/${id}`, updatedData, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            const currentUsersData = [...this.users.value];
            const index = currentUsersData.findIndex(user => user.id === updatedData.id);
            if (index !== -1) {
              currentUsersData[index] = updatedData;
              this.users.next(currentUsersData);
            }
            return response.body;
          } else {
            throw new Error('Failed to add data: Unexpected status code');
          }
        }),
        catchError(error => {
          console.error('Failed to add data:', error);
          return throwError(error);
        })
      );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`, { observe: 'response' })
      .pipe(
        catchError(error => {
          console.error('Failed to delete user:', error);
          return throwError(error);
        }),
        map(response => {
          if (response.status === 200) {
            const updatedUsers = this.users.value.filter(user => user.id !== id);
            this.users.next(updatedUsers);
            console.log('User deleted successfully');
          } else {
            console.error('Failed to delete user: Unexpected status code');
          }
          return response.body;
        })
      );
  }
}
