import { CrawlerNotificationAction } from "./crawler-notification-action.enum";
import { CrawlerResponse } from "./crawler-response.model";

// Crawler Response Model Class Definition
export class CrawlerNotification {
  
  constructor (
      public action: CrawlerNotificationAction,
      public data: CrawlerResponse
    ) {
  }

}