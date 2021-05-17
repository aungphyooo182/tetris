import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameBoardControllerComponent } from "./game/presentation/game-board/game-board-controller.component";

const routes: Routes = [
  {
    path: "",
    component: GameBoardControllerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
