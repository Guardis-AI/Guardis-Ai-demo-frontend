import { Route } from "@angular/router";
// import { AuthGuard, AdminRoleGuard } from "app/core/auth/guards/auth.guard";
import { NoAuthGuard } from "app/core/auth/guards/noAuth.guard";
import { LayoutComponent } from "app/layout/layout.component";
import { InitialDataResolver } from "app/app.resolvers";
// import { SettingComponent } from './modules/admin/setting/setting.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
  // Redirect empty path to '/example'
  { path: "", pathMatch: "full", redirectTo: "live" },
  // Redirect signed in user to the '/example'
  //
  // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
  // path. Below is another redirection for that path to redirect the user to the desired
  // location. This is a small convenience to keep all main routes together here on this file.
  { path: "signed-in-redirect", pathMatch: "full", redirectTo: "live" },
  // {path:'Notification', pathMatch: 'full', redirectTo: 'Homeicon'},
  // {path:'Settings',pathMatch: 'full', redirectTo: 'Seticon'},

  // // Auth routes for guests
  // {
  //   path: "",
  //   canActivate: [NoAuthGuard],
  //   canActivateChild: [NoAuthGuard],
  //   component: LayoutComponent,
  //   data: {
  //     layout: "empty",
  //   },
  //   children: [
  //     {
  //       path: "sign-in",
  //       loadChildren: () =>
  //         import("app/modules/auth/sign-in/sign-in.module").then(
  //           (m) => m.AuthSignInModule
  //         ),
  //     },
  //   ],
  // },

  // // Auth routes for authenticated users
  // {
  //   path: "",
  //   canActivate: [AuthGuard],
  //   canActivateChild: [AuthGuard],
  //   component: LayoutComponent,
  //   data: {
  //     layout: "empty",
  //   },
  //   children: [
  //     {
  //       path: "sign-out",
  //       loadChildren: () =>
  //         import("app/modules/auth/sign-out/sign-out.module").then(
  //           (m) => m.AuthSignOutModule
  //         ),
  //     },
  //   ],
  // },

  // Landing routes
  // {
  //   path: "",
  //   component: LayoutComponent,
  //   data: {
  //     layout: "empty",
  //   },
  //   children: [],
  // },

  {
    path: "",
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: LayoutComponent,
    // resolve: {
    //   initialData: InitialDataResolver,
    // },
    data: {
      layout: "empty",
    },
    children: [
      {
        path: "user",
        loadChildren: () =>
          import("app/modules/admin/user/user.module").then(
            (m) => m.UserModule
          ),
      },
      {
        path: "playback",
        loadChildren: () =>
          import("app/modules/admin/playback/playback.module").then(
            (m) => m.PlaybackModule
          ),
      },
      {
        path: "setting",
        loadChildren: () =>
          import("app/modules/admin/setting/setting.module").then(
            (m) => m.SettingModule
          ),
      },
      {
        path: "live",
        loadChildren: () =>
          import("app/modules/admin/livestream/livestream.module").then(
            (m) => m.LivestreamModule
          ),
      },
      {
        path: "viewnotifications",
        loadChildren: () =>
          import(
            "app/modules/admin/viewnotifications/viewnotifications.module"
          ).then((m) => m.ViewnotificationsModule),
      },
    ],
  },
];
