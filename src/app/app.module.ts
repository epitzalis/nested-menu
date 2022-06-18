import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { NestedMenuModule } from '@components/nested-menu/nested-menu.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NestedMenuModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
