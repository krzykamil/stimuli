import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["checkbox"]

  connect() {}

  checkAll() {
    this.setAllCheckboxes(true);
  }

  checkNone() {
    this.setAllCheckboxes(false);
  }

  setAllCheckboxes(checked) {
    this.checkboxTargets.forEach((el) => {
      if (!el.disabled) {
        el.checked = checked;
      }
    });
  }
}
