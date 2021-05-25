import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import { ZippyComponent } from './zippy/zippy.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StylingInvalidInputFieldsComponent } from './styling-invalid-input-fields/styling-invalid-input-fields.component';
import { NgFormComponent } from './ng-form/ng-form.component';
import { CourseComponent } from './course/course.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';

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
    ExampleCustomDirectivesComponent,
    ZippyComponent,
    BootstrapFormComponent,
    StylingInvalidInputFieldsComponent,
    NgFormComponent,
    CourseComponent,
    FormArrayComponent,
    FormBuilderComponent,
    ChangePasswordComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
