import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/material/material.module';
import { InputFileComponent } from './components/input-file/input-file.component';
import { PictureFrameComponent } from './components/picture-frame/picture-frame.component';

@NgModule({
    declarations: [
      InputFileComponent,
      PictureFrameComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      MaterialModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      InputFileComponent,
      PictureFrameComponent
    ]
})
export class SharedModule
{
}
