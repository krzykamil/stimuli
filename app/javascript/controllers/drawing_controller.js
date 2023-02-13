import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets =["canvas", "roof"]
  drawingContext;

  connect() {
    this.drawingContext = this.canvasTarget.getContext('2d')
    this.drawingContext.strokeStyle = 'red';
    this.drawingContext.lineWidth = 5;
  }

  drawLine(event) {
    console.log(event.params)
    this.drawingContext.beginPath();
    this.drawingContext.moveTo(event.params.x, event.params.y);
    if (event.params.direction === 'horizontal') {
      this.drawingContext.lineTo(event.params.length, event.params.y);
    } else {
      this.drawingContext.lineTo(event.params.x, event.params.length);
    }
    this.drawingContext.lineTo(event.params.x, event.params.lengthY);
    this.drawingContext.stroke();
  }
}
