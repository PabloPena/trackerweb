import { CrawlerResponseStatus } from "./crawler-response-status.enum";

// Crawler Response Model Class Definition
export class CrawlerResponse {
  
  constructor (
      public requestID: string,
      public requestedUrl: string, 
      public status: CrawlerResponseStatus,
      public processingTime?: number,
      public results?: string[]
    ) {
  }

}