import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../global-components/global-components.module";
import { SharedComponentsModule } from "./presentation/shared-components/shared-components.module";
import { BusinessLogicFacade } from "./business-logic/business-logic.facade";
import { BusinessRequirementsInjectionToken } from "./presentation/business-logic.requirements";
import { GameBoardModule } from "./presentation/game-board/game-board.module";

@NgModule({
  imports: [
    BusinessLogicFacade,
    CommonModule,
    GlobalComponentsModule,
    SharedComponentsModule,
    GameBoardModule,
  ],
  providers: [
    {
      provide: BusinessRequirementsInjectionToken,
      useClass: BusinessLogicFacade,
    },
  ],
  exports: [],
})
export class GameFeatureModule {}
