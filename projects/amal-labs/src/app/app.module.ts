import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './pages/canvas/canvas.component';
import { ApiService } from './shared/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
