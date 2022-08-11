import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  punkte =0
  toWrite = 'Hellooo';
  @Input()
  written! :string;

  async wordWritten() {
    if (this.toWrite===this.written){
      this.toWrite="YES"
      this.written=""
      this.punkte++
    }

  }
}
