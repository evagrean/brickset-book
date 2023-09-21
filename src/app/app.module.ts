import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SetsComponent } from './sets/sets.component';
import { PartListComponent } from './parts-shopping-list/part-list.component';
import { PartListEditComponent } from './parts-shopping-list/part-list-edit/part-list-edit.component';
import { SetListComponent } from './sets/set-list/set-list.component';
import { SetDetailComponent } from './sets/set-detail/set-detail.component';
import { SetItemComponent } from './sets/set-list/set-item/set-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SetsComponent,
    SetListComponent,
    SetDetailComponent,
    SetItemComponent,
    PartListComponent,
    PartListEditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
