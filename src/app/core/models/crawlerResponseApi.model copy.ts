import { CrawlerRequestStatus } from "./crawlerRequestStatus.enum";
import { CrawlerResponseApi } from "./crawlerResponseApi.model";

// Crawler Response Model Class Definition
export class CrawlerResponseApiNotification {
  
  constructor (
      public action: NotificationAction,
      public data: CrawlerResponseApi
    ) {
  }

}