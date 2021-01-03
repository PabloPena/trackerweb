import { Component, ChangeDetectionStrategy, ViewChild } from "@angular/core";
import { MatInput } from "@angular/material/input";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CrawlerActions, NotificationActions } from "src/app/core/actions";
import { CrawlerResponse } from "src/app/core/models/crawler-response.model";
import * as fromRoot from '../../reducers';

@Component({
  selector: 'crawler-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'crawler-page.component.html'
})

export class CrawlerPageComponent {
  @ViewChild(MatInput) inputUrl: MatInput;

  searchURL: string;
  responses$: Observable<CrawlerResponse[]>;

  constructor(private store: Store<fromRoot.State>){
    
  }

  ngOnInit(){
    this.responses$ = this.store.pipe(select(fromRoot.getCurrentResponses))
  }

  processURL(){
    if (!this.searchURL || this.inputUrl.errorState) return;
    this.store.dispatch(new CrawlerActions.CrawlURLRequest(this.searchURL)); 
    this.searchURL = null;
  }

  inputIsValid(){
    return (this.searchURL && !this.inputUrl.errorState);
  }

}