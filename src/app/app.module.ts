import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerPaiComponent } from './components/container-pai/container-pai.component';
import { HeaderComponent } from './components/header/header.component';
import { BoxFormComponent } from './components/box-form/box-form.component';
import { BoxListsComponent } from './components/box-lists/box-lists.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './components/box-lists/list/list.component';
import { ItemComponent } from './components/box-lists/item/item.component';
import { ContainerSobreComponent } from './components/container-sobre/container-sobre.component';
import { CardDevComponent } from './components/container-sobre/card-dev/card-dev.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerPaiComponent,
    HeaderComponent,
    BoxFormComponent,
    BoxListsComponent,
    ListComponent,
    ItemComponent,
    ContainerSobreComponent,
    CardDevComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
