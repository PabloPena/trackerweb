import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CrawlerRoutingModule } from './crawler-routing.module';
import { CrawlerPageComponent } from './container/crawler-page.component';
import { CrawlerResultsComponent } from './components/crawler-results.component';

export const COMPONENTS = [
  CrawlerResultsComponent,
  CrawlerPageComponent,
];

@NgModule({
  imports: [  
    SharedModule,
    CrawlerRoutingModule,
  ],
  entryComponents:[],
  declarations: COMPONENTS
})
export class CrawlerModule { }
