import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { AuthService } from 'app/core/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad
{
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Can activate
     *
     * @param route
     * @param state
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
        const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
        return this._check(redirectUrl);
    }

    /**
     * Can activate child
     *
     * @param childRoute
     * @param state
     */
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
        const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
        return this._check(redirectUrl);
    }

    /**
     * Can load
     *
     * @param route
     * @param segments
     */
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean
    {
        return this._check('/');
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Check the authenticated status
     *
     * @param redirectURL
     * @private
     */
    private _check(redirectURL: string): Observable<boolean>
    {
        // Check the authentication status
        return this._authService.check()
                   .pipe(
                       switchMap((authenticated) => {

                           // If the user is not authenticated...
                           if ( !authenticated )
                           {
                               // Redirect to the sign-in page
                               this._router.navigate(['sign-in'], {queryParams: {redirectURL}});

                               // Prevent the access
                               return of(false);
                           }

                           // Allow the access
                           return of(true);
                       })
                   );
    }
}

@Injectable({
    providedIn: 'root'
})

export class AdminRoleGuard implements CanActivate
{
    constructor(){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let role = localStorage.getItem('userType');
       if(role == 'ADMIN'  )return true;
        // if(role == 'ADMIN' && path == '/apps/users' )return true;
        // if(role == 'ADMIN' && path == '/apps/distributor')return true;
        // if(role == 'ADMIN' && path == '/apps/items')return true;
        // if((role == 'ADMIN' || role == 'MH RM') && path == '/apps/adddistributor')return true;
        // if((role == 'ADMIN' || role == 'MH RM' || role == 'MH BDE') && path == '/apps/userregistration')return true;
        // if((role == 'ADMIN' || role == 'MH RM' ) && path == '/apps/approval')return true;
        // if((role) && path == '/apps/reports')return true;
        else {
            alert('No Access!')
            return false;
        }

    }

}


@Injectable({
    providedIn: 'root'
})

export class RoleGuard implements CanActivate
{
    constructor(){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let role = localStorage.getItem('userType');
        if(role == 'MH RM' || role == 'ADMIN'  )return true;
        else {
            alert('No Access!')
            return false;
        }

    }
}

@Injectable({
    providedIn: 'root'
})

export class BMRoleGuard implements CanActivate
{
    constructor(){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let role = localStorage.getItem('userType');
        if(role == 'MH BDE' || role == 'ADMIN'  || role == 'MH RM')return true;
        else {
            alert('No Access!')
            return false;
        }

    }
}

