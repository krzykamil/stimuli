import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["source", "button"];

  connect() {}

  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value);
  }
}