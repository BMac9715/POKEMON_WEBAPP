import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from 'app/material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { accountRoutes } from './account.routing';
import { AccountComponent } from './pages/account/account.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { AccountFormComponent } from './components/account-form/account-form.component';

@NgModule({
    declarations: [
      AccountComponent,
      UploadImageComponent,
      AccountFormComponent
    ],
    imports     : [
      RouterModule.forChild(accountRoutes),
      MaterialModule,
      SharedModule,
    ]
})
export class AccountModule
{
}
