import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_SERVER} from '../model/constants';
import {Observable} from 'rxjs';
import {IMessageResponse, JwtResponse} from '../model/jwt-response.model';
import {tap} from 'rxjs/operators';
import {AccountService} from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private url: string = URL_SERVER + '/api/authenticate';
  private urlToken: string = URL_SERVER + '/api/token';
  private urlLogout: string = URL_SERVER + '/api/logout';

  constructor(private http: HttpClient,
              private accountService: AccountService) {}

  signup(signupRequest: any): Observable<IMessageResponse> {
    return this.http.post<IMessageResponse>(`${this.url}/signup`, signupRequest);
  }

  login(loginRequest: any): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.url}/signin`, loginRequest, { withCredentials: true }).pipe(
      tap((jwtResponse) => {
        this.accountService.updateCurrentUser(jwtResponse);
    }));
  }

  getTokenFromCookie(): Observable<JwtResponse> {
    return this.http.get<JwtResponse>(this.urlToken, { withCredentials: true });
  }

  restoreSessionFromServer(): void {
    this.getTokenFromCookie().subscribe(
      (tokenResponse) => {
        if (tokenResponse) {
          this.accountService.updateCurrentUser(tokenResponse);
        } else {
          this.accountService.clearCurrentUser();
        }
      }
    );
  }

  removeTokenFromCookie(): Observable<any> {
    return this.http.post(this.urlLogout, { responseType: 'text' }, { withCredentials: true });
  }

  logout(): void {
    this.accountService.clearCurrentUser();
    this.removeTokenFromCookie().subscribe(() => {
      console.log('Пользователь вышел');
    });
  }
}
