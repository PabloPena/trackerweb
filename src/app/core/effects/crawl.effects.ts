import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';
import { CrawlerActions, NotificationActions } from '../actions';
import { CrawlerResponseApi } from '../models/crawlerResponseApi.model';
import { CrawlService } from '../services/crawl.service';
import { NotificationType, Notification } from '../models/notification.model';


@Injectable()
export class CrawlEffects {

    constructor(
        private actions$: Actions,
        private crawlService: CrawlService
    ) { }

    @Effect()
    requestCrawlUrl$ =
    this.actions$.pipe(
        ofType<CrawlerActions.CrawlURLRequest>(
            CrawlerActions.CrawlerActionTypes.CrawlURLRequest
        ),
        map(action => action.payload),
        switchMap(payload => {
            return this.crawlService.crawlUrl(payload).pipe(
                map((crawlerResponse: CrawlerResponseApi) => 
                    new CrawlerActions.CrawlURLStart(crawlerResponse)
                ),
                catchError(_ => { 
                    let notification = new Notification(null, 'An unexpected error has ocurred', NotificationType.ERROR, 2000);
                    return of(new NotificationActions.OpenNotification(notification))
                })
            )
        })
    );
}