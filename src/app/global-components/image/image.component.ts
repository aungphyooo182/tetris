import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ImageStore } from "./image.store";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"],
})
export class ImageComponent {
  constructor(private store: ImageStore) {}
  @Input() src;
  @Input() alt;
  @Input() class;

  @Output() btnClick = new EventEmitter<any>();

  onBtnClick(e) {
    this.btnClick.emit();
  }
}
