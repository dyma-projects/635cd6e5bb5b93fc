import { BehaviorSubject, Observable } from 'rxjs';

export class UserService {
  public get users$(): Observable<string[]> {
    return this._users$.asObservable();
  }
  private readonly _users$ = new BehaviorSubject<string[]>([]);

  public addUser(user: string): void {
    this._users$.next([...this._users$.value, user]);
  }
}
