import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from 'app/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      MainLayoutComponent,
      FooterComponent,
      NavbarComponent
    ],
    imports: [
      SharedModule,
      RouterModule
    ],
    exports: []
})
export class LayoutModule
{
}
