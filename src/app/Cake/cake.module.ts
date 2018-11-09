import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeComponent } from '@app/Cake/cake.component';
import { CakeSidebarComponent } from './cake-sidebar/cake-sidebar.component';
import { CakeSimilarComponent } from './cake-similar/cake-similar.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { CakeManualComponent } from './cake-manual/cake-manual.component';
import { SharedModule } from '@Shared/shared.module';
import { CakeDetailsControlsComponent } from './cake-details/cake-details-controls/cake-details-controls.component';
import { CakeDetailsCarouselComponent } from './cake-details/cake-details-carousel/cake-details-carousel.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    CakeComponent,
    CakeSidebarComponent,
    CakeSimilarComponent,
    CakeManualComponent,
    CakeDetailsComponent,
    CakeDetailsControlsComponent,
    CakeDetailsCarouselComponent,
  ],
})
export class CakeModule {}
