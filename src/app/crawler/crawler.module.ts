import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CrawlerRoutingModule } from './crawler-routing.module';
import { CrawlerPageComponent } from './container/crawler-page.component';
import { CrawlerResultsAccordionComponent } from './components/crawler-results-accordion/crawler-results-accordion.component';
import { CrawlerResultItems } from './components/crawler-result-item/crawler-result-items.component'

export const COMPONENTS = [
  CrawlerResultsAccordionComponent,
  CrawlerPageComponent,
  CrawlerResultItems
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
