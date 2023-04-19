import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-frame',
  templateUrl: './picture-frame.component.html',
  styleUrls: ['./picture-frame.component.scss']
})
export class PictureFrameComponent {

  @Input() imageSrc:string = '';

  constructor() {

  }

}
