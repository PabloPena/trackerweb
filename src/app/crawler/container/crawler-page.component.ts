import { Component, ChangeDetectionStrategy } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CrawlerActions } from "src/app/core/actions";
import { CrawlerResponseApi } from "src/app/core/models/crawlerResponseApi.model";
import * as fromRoot from '../../reducers';

@Component({
  selector: 'crawler-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'crawler-page.component.html'
})

export class CrawlerPageComponent {
  searchURL: string;
  responses$: Observable<CrawlerResponseApi[]>;
  constructor(private store: Store<fromRoot.State>){
    
  }

  ngOnInit(){
    this.responses$ = this.store.pipe(select(fromRoot.getCurrentResponses))
  }

  processURL(){
    this.store.dispatch(new CrawlerActions.CrawlURLRequest(this.searchURL));
    this.searchURL = null;
  }

}