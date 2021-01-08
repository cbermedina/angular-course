import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { TweetComponent } from './tweet/tweet.component';
import { ExampleNgifComponent } from './example-ngif/example-ngif.component';
import { ExampleHiddenPropertyComponent } from './example-hidden-property/example-hidden-property.component';
import { ExampleNgSwitchCaseComponent } from './example-ng-switch-case/example-ng-switch-case.component';
import { ExampleNgForComponent } from './example-ng-for/example-ng-for.component';
import { ExampleNgClassComponent } from './example-ng-class/example-ng-class.component';
import { ExampleNgStyleComponent } from './example-ng-style/example-ng-style.component';
import { InputFormatDirective } from './input-format.directive';
import { ExampleCustomDirectivesComponent } from './example-custom-directives/example-custom-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    LikeComponent,
    TweetComponent,
    ExampleNgifComponent,
    ExampleHiddenPropertyComponent,
    ExampleNgSwitchCaseComponent,
    ExampleNgForComponent,
    ExampleNgClassComponent,
    ExampleNgStyleComponent,
    InputFormatDirective,
    ExampleCustomDirectivesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
