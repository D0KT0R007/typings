import { Component, Input } from '@angular/core';
import randomWord from 'random-words';


@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {


  punkte = 0;
  toWrite = randomWord(1)[0];
  @Input()
  written!: string;

  async letterWritten() {
    if (this.written === this.toWrite[0]) {
      this.punkte++;
      this.toWrite= this.toWrite.slice(1)
      if(this.toWrite===''){
        this.toWrite=await this.newWord()
      }
    }
    this.written = '';
  }

  async newWord() {
    return randomWord(1)[0];
  }

}

