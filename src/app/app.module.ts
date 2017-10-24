import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ScrollToModule } from 'ng2-scroll-to';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { GraphicSectionComponent } from './graphic-section/graphic-section.component';
import { SailOnScrollDirective } from './sail-on-scroll.directive';
import { PanOnScrollDirective } from './pan-on-scroll.directive';
import { WarehousePanOnScrollDirective } from './warehouse-pan-on-scroll.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MoveToLeftOnScrollDirective } from './move-to-left-on-scroll.directive';
import { MoveToRightOnScrollDirective } from './move-to-right-on-scroll.directive';
import { MoveLeftUpOnScrollDirective } from './move-left-up-on-scroll.directive';
import { MoveLeftDownOnScrollDirective } from './move-left-down-on-scroll.directive';
import { MoveDownOnScrollDirective } from './move-down-on-scroll.directive';
import { MoveRightUpOnScrollDirective } from './move-right-up-on-scroll.directive';
import { MoveUpOnScrollDirective } from './move-up-on-scroll.directive';
import { MoveRightDownOnScrollDirective } from './move-right-down-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentSectionComponent,
    GraphicSectionComponent,
    SailOnScrollDirective,
    PanOnScrollDirective,
    WarehousePanOnScrollDirective,
    ContactFormComponent,
    MobileHeaderComponent,
    MoveToLeftOnScrollDirective,
    MoveToRightOnScrollDirective,
    MoveLeftUpOnScrollDirective,
    MoveLeftDownOnScrollDirective,
    MoveDownOnScrollDirective,
    MoveRightUpOnScrollDirective,
    MoveUpOnScrollDirective,
    MoveRightDownOnScrollDirective
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
