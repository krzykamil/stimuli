import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["source", "button"];

  //We have two controller instances, both can distinguish only their targets, so having copy button per controller instance is fine
  copy() {
    navigator.clipboard.writeText(this.sourceTarget.value);
  }
}
