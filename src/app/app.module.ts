import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from 'ng2-scroll-to';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { GraphicSectionComponent } from './graphic-section/graphic-section.component';
import { SailOnScrollDirective } from './sail-on-scroll.directive';
import { PanOnScrollDirective } from './pan-on-scroll.directive';
import { WarehousePanOnScrollDirective } from './warehouse-pan-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentSectionComponent,
    GraphicSectionComponent,
    SailOnScrollDirective,
    PanOnScrollDirective,
    WarehousePanOnScrollDirective
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
