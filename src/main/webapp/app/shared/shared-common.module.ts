import { NgModule } from '@angular/core';

import { FreelanceManagementSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FreelanceManagementSystemSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FreelanceManagementSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FreelanceManagementSystemSharedCommonModule {}
