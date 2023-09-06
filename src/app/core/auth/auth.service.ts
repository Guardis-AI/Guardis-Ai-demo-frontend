import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { AuthUtils } from "app/core/auth/auth.utils";
import { UserService } from "app/core/user/user.service";
import { environment } from "../../../environments/environment";

const baseUrlApi = environment.baseUrl;

@Injectable()
export class AuthService {
  private _authenticated: boolean = false;

  /**
   * Constructor
   */
  constructor(
    private _httpClient: HttpClient,
    private _userService: UserService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Setter & getter for access token
   */
  set dataLocalstorage(jsonobj: any) {
    localStorage.setItem(jsonobj.name, jsonobj.value);
  }

  get accessToken(): string {
    return localStorage.getItem("accessToken") ?? "";
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Forgot password
   *
   * @param email
   */
  forgotPassword(email: string): Observable<any> {
    return this._httpClient.post("api/auth/forgot-password", email);
  }
  /**
   * Reset password
   *
   * @param password
   */
  resetPassword(password: string): Observable<any> {
    return this._httpClient.post("api/auth/reset-password", password);
  }

  /**
   * Sign in
   *
   * @param credentials
   */
  signIn(credentials: { email: string; password: string }): Observable<any> {
    // Throw error, if the user is already logged in
    if (this._authenticated) {
      return throwError("User is already logged in.");
    }

    return this._httpClient
      .post(`${baseUrlApi}/api/user_api/gailoginv1`, credentials)
      .pipe(
        switchMap((response: any) => {
          if (response.gai_login_v1.login_status == true) {
            // Store the access token , refresh Token in the local storage
            this.dataLocalstorage = {
              name: "accessToken",
              value: response.gai_login_v1.access_token,
            };
            this.dataLocalstorage = {
              name: "refreshToken",
              value: response.gai_login_v1.refresh_token,
            };
            this.dataLocalstorage = {
              name: "userId",
              value: response.gai_login_v1.user_id,
            };
            this.dataLocalstorage = {
              name: "userName",
              value: response.gai_login_v1.user_name,
            };
            this.dataLocalstorage = {
              name: "loginStatus",
              value: response.gai_login_v1.login_status,
            };
            this.dataLocalstorage = {
              name: "startDate",
              value: response.gai_login_v1.user_st_date,
            };
            this.dataLocalstorage = {
              name: "unitname",
              value: response.gai_login_v1.edgeunit,
            };
            this.dataLocalstorage = {
              name: "cfUrl",
              value: response.gai_login_v1.cf_url,
            };
            this.dataLocalstorage = {
              name: "Devices",
              value: response.gai_login_v1.user_devices,
            };
            // Set the authenticated flag to true
          }

          // Return a new observable with the response
          return of(response);
        })
      );
  }

  /**
   * Sign in using the access token
   */
  signInUsingToken(): Observable<any> {
    // Sign in using the token
    //     return this._httpClient.post('api/auth/sign-in-with-token', {
    //         accessToken: this.accessToken
    //     }).pipe(
    //         catchError(() =>

    //             // Return false
    //             of(false)
    //         ),
    //         switchMap((response: any) => {

    //             // Replace the access token with the new one if it's available on
    //             // the response object.
    //             //
    //             // This is an added optional step for better security. Once you sign
    //             // in using the token, you should generate a new one on the server
    //             // side and attach it to the response object. Then the following
    //             // piece of code can replace the token with the refreshed one.
    //             if ( response.accessToken )
    //             {
    //                 this.accessToken = response.accessToken;
    //             }

    //             // Set the authenticated flag to true
    //             this._authenticated = true;

    //             // Store the user on the user service
    //             this._userService.user = response.user;

    //             // Return true
    //             return of(true);
    //         })
    //  );
    return of(true);
  }

  // /**
  //  * Sign out */
  signOut(): Observable<any> {
    localStorage.clear();
    // Set the authenticated flag to false
    this._authenticated = false;
    // Return the observable
    return of(true);
  }

  /**
   * Sign up
   *
   * @param user
   */
  signUp(user: {
    name: string;
    email: string;
    password: string;
    company: string;
  }): Observable<any> {
    return this._httpClient.post("api/auth/sign-up", user);
  }

  /**
   * Unlock session
   *
   * @param credentials
   */
  unlockSession(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this._httpClient.post("api/auth/unlock-session", credentials);
  }

  generateToken(): Observable<any> {
    return of(true);
  }
  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this._authenticated) {
      return of(true);
    }

    // Check the access token availability
    if (!this.accessToken) {
      return of(false);
    }

    // Check the access token expire date
    if (AuthUtils.isTokenExpired(this.accessToken)) {
      console.log(
        "Token is " +
          this.accessToken +
          AuthUtils.isTokenExpired(this.accessToken)
      );
      return of(false);
    }

    // If the access token exists and it didn't expire, sign in using it
    return this.signInUsingToken();
  }
}
