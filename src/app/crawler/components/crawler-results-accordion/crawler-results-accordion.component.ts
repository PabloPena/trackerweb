import { Component, ChangeDetectionStrategy, Input, ViewChild } from "@angular/core";
import { MatAccordion } from "@angular/material/expansion";
import { Store } from "@ngrx/store";
import { CrawlerActions } from "src/app/core/actions";
import { CrawlerResponse } from "src/app/core/models/crawler-response.model";
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'crawler-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'crawler-results-accordion.component.html'
})

export class CrawlerResultsAccordionComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() responses: CrawlerResponse[];

  constructor(private store: Store<fromRoot.State>) {
  }

  discardUrl(item: CrawlerResponse) {
    this.store.dispatch(new CrawlerActions.CrawlURLDiscard(item));
  }

}