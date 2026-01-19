import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {JwtResponse} from '../model/jwt-response.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  public readonly _currentUser$ = new BehaviorSubject<JwtResponse | null>(null);

  constructor() {}

  get currentUser$(): Observable<JwtResponse | null> {
    return this._currentUser$.asObservable();
  }

  getCurrentUser(): JwtResponse | null {
    return this._currentUser$.getValue();
  }

  updateCurrentUser(user: JwtResponse | null): void {
    this._currentUser$.next(user);
  }

  clearCurrentUser(): void {
    this._currentUser$.next(null);
  }

  getUserRoles(): string[] {
    const user = this.getCurrentUser();
    return user?.roles || [];
  }

  hasRole(role: string): boolean {
    return this.getUserRoles().includes(role);
  }
}

