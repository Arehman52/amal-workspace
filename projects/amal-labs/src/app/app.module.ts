import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedGlobalsModule } from 'shared-globals/shared-globals.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './shared/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbModalModule,
    AppRoutingModule,
    SharedGlobalsModule
  ],
  providers: [

		// DatePipe,
		// TitleCasePipe,
		// ConfirmRouteGuard,
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: TokenInterceptor,
		// 	multi: true
		// },
		// {
		// 	provide: LocationStrategy,
		// 	useClass: HashLocationStrategy
		// },
		// {
		// 	provide: APP_INITIALIZER,
		// 	useFactory: WOWPortalConfigFactoryProvider,
		// 	deps: [AppConfigService],
		// 	multi: true
		// }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
