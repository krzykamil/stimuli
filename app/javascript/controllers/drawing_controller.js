import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets =["canvas", "roof"]
  drawingContext;

  connect() {
    this.drawingContext = this.canvasTarget.getContext('2d')
    this.drawingContext.strokeStyle = 'red';
    this.drawingContext.lineWidth = 5;
  }

  lineX(event) {
    this.drawingContext.beginPath();
    this.drawingContext.moveTo(100, 100);
    this.drawingContext.lineTo(300, 100);
    this.drawingContext.stroke();
  }

  lineY() {
    this.drawingContext.beginPath();
    this.drawingContext.moveTo(100, 100);
    this.drawingContext.lineTo(100, 300);
    this.drawingContext.stroke();
  }
}
