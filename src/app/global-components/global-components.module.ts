import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from "./button/button.component";
import { TextComponent } from "./text/text.component";
import { InputComponent } from "./input/input.component";
import { ImageComponent } from "./image/image.component";

const components = [
  ButtonComponent,
  TextComponent,
  InputComponent,
  ImageComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, ReactiveFormsModule],
})
export class GlobalComponentsModule {}
