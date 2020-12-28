import { Action } from '@ngrx/store';
import { CrawlerResponseApi } from '../models/crawlerResponseApi.model';

export enum CrawlerActionTypes {
  CrawlURLRequest = '[Crawler] CrawlURLRequest',
  CrawlURLStart = '[Crawler] CrawlURLStart',
  CrawlURLUpdate = '[Crawler] CrawlURLUpdate'
}

export class CrawlURLRequest implements Action {
  readonly type = CrawlerActionTypes.CrawlURLRequest;
  constructor(public payload: string) {}
}

export class CrawlURLStart implements Action {
  readonly type = CrawlerActionTypes.CrawlURLStart;
  constructor(public payload: CrawlerResponseApi) {}
}

export class CrawlURLUpdate implements Action {
  readonly type = CrawlerActionTypes.CrawlURLUpdate;
  constructor(public payload: CrawlerResponseApi) {}
}

export type CrawlerActionsUnion = CrawlURLRequest | CrawlURLStart | CrawlURLUpdate;
