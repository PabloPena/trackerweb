import { Action } from '@ngrx/store';
import { CrawlerResponse } from '../models/crawler-response.model';

export enum CrawlerActionTypes {
  CrawlURLRequest = '[Crawler] CrawlURLRequest',
  CrawlURLStart = '[Crawler] CrawlURLStart',
  CrawlURLUpdate = '[Crawler] CrawlURLUpdate',
  CrawlURLDiscard = '[Crawler] CrawlURLDiscard'
}

export class CrawlURLRequest implements Action {
  readonly type = CrawlerActionTypes.CrawlURLRequest;
  constructor(public payload: string) {}
}

export class CrawlURLStart implements Action {
  readonly type = CrawlerActionTypes.CrawlURLStart;
  constructor(public payload: CrawlerResponse) {}
}

export class CrawlURLUpdate implements Action {
  readonly type = CrawlerActionTypes.CrawlURLUpdate;
  constructor(public payload: CrawlerResponse) {}
}

export class CrawlURLDiscard implements Action {
  readonly type = CrawlerActionTypes.CrawlURLDiscard;
  constructor(public payload: CrawlerResponse) {}
}

export type CrawlerActionsUnion = CrawlURLRequest | CrawlURLStart | CrawlURLUpdate | CrawlURLDiscard;
