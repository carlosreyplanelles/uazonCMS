import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { SHARED_DIRECTIVES } from "./directives/";
import { SHARED_PIPES } from "./pipes/";
import { SHARED_MODELS } from "./models/";


const SHARED_MODULES = [
  BrowserModule, FormsModule, CommonModule
]
@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...SHARED_DIRECTIVES, ...SHARED_PIPES
  ],
  exports: [
    ...SHARED_DIRECTIVES, ...SHARED_PIPES, ...SHARED_MODULES
  ]
})
export class SharedModule {}