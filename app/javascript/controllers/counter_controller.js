import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    count: { type: Number, default: 0 },
  };

  static targets = ["result"];

  inc() {
    this.countValue += 1;
  }

  dec() {
    this.countValue -= 1;
  }

  //Monitors the value, method provided by the fact we defined value with the name count
  countValueChanged() {
    this.resultTarget.innerHTML = this.countValue;
  }
}
