import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BgMenuComponent } from './components/bg-menu/bg-menu.component';
import { SecondSectionComponent } from './components/second-section/second-section.component';
import { GoldLineComponent } from './components/gold-line/gold-line.component';
import { GreenBtnComponent } from './components/green-btn/green-btn.component';
import { ThirdSectionComponent } from './components/third-section/third-section.component';
import { FourthSectionComponent } from './components/fourth-section/fourth-section.component';
import { FiftySectionComponent } from './components/fifty-section/fifty-section.component';
import { SixtySectionComponent } from './components/sixty-section/sixty-section.component';
import { SeventhSectionComponent } from './components/seventh-section/seventh-section.component';
import { EighthSectionComponent } from './components/eighth-section/eighth-section.component';
import { NinethSectionComponent } from './components/nineth-section/nineth-section.component';
import { TeenSectionComponent } from './components/teen-section/teen-section.component';
import { EleventhSectionComponent } from './components/eleventh-section/eleventh-section.component';
import { TwelfthSectionComponent } from './components/twelfth-section/twelfth-section.component';
import { FourfthSectionComponent } from './components/fourfth-section/fourfth-section.component';
import { QuinceavoComponent } from './components/quinceavo/quinceavo.component';
import { DieciseisavoComponent } from './components/dieciseisavo/dieciseisavo.component';
import { DiecisieteavoComponent } from './components/diecisieteavo/diecisieteavo.component';
import { DieciochoavoComponent } from './components/dieciochoavo/dieciochoavo.component';
import { DiecinueveavoComponent } from './components/diecinueveavo/diecinueveavo.component';
import { VeinteavoComponent } from './components/veinteavo/veinteavo.component';
import { VeintiunavoComponent } from './components/veintiunavo/veintiunavo.component';
import { VeintidosavoComponent } from './components/veintidosavo/veintidosavo.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    BgMenuComponent,
    SecondSectionComponent,
    GoldLineComponent,
    GreenBtnComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FiftySectionComponent,
    SixtySectionComponent,
    SeventhSectionComponent,
    EighthSectionComponent,
    NinethSectionComponent,
    TeenSectionComponent,
    EleventhSectionComponent,
    TwelfthSectionComponent,
    FourfthSectionComponent,
    QuinceavoComponent,
    DieciseisavoComponent,
    DiecisieteavoComponent,
    DieciochoavoComponent,
    DiecinueveavoComponent,
    VeinteavoComponent,
    VeintiunavoComponent,
    VeintidosavoComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    BgMenuComponent,
    SecondSectionComponent
  ]
})
export class PagesModule { }
