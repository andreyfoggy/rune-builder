import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { RunesComponent } from './main/runes/runes.component';
import { SecondaryRunesComponent } from './main/secondary-runes/secondary-runes.component';
import { FormsModule } from '@angular/forms';
import { ZooState } from './main/store/runes.store';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RunesComponent,
    SecondaryRunesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    NgxsModule.forRoot([ZooState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
