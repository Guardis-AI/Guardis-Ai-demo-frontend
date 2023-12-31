import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ExtraOptions, PreloadAllModules, RouterModule } from "@angular/router";
import { MarkdownModule } from "ngx-markdown";
import { FuseModule } from "@fuse";
import { FuseConfigModule } from "@fuse/services/config";
import { FuseMockApiModule } from "@fuse/lib/mock-api";
import { CoreModule } from "app/core/core.module";
import { appConfig } from "app/core/config/app.config";
import { mockApiServices } from "app/mock-api";
import { LayoutModule } from "app/layout/layout.module";
import { AppComponent } from "app/app.component";
import { appRoutes } from "app/app.routing";
import { FormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { ViewnotificationsComponent } from "./modules/admin/viewnotifications/viewnotifications.component";

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: "enabled",
};

@NgModule({
  declarations: [AppComponent, ViewnotificationsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    MatNativeDateModule,
    // Fuse, FuseConfig & FuseMockAPI
    FuseModule,
    FuseConfigModule.forRoot(appConfig),
    FuseMockApiModule.forRoot(mockApiServices),
    // Core module of your application
    CoreModule,
    FormsModule,
    // Layout module of your application
    LayoutModule,
    // 3rd party modules that require global configuration via forRoot
    MarkdownModule.forRoot({}),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
