import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TextStore } from "./text.store";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.css"],
})
export class TextComponent implements OnInit {
  @Input() class;
  @Input() loading;
  @Output() textClick = new EventEmitter<any>();

  onTextClick($event) {
    this.textClick.emit($event);
  }
  constructor(private store: TextStore) {}
  ngOnInit() {}
}
