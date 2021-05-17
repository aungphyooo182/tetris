import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GameFeatureModule } from "./game/game.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GameFeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
