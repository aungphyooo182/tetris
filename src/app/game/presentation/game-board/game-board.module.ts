import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { GameBoardControllerComponent } from "./game-board-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [GameBoardControllerComponent],
  exports: [GameBoardControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class GameBoardModule {}
