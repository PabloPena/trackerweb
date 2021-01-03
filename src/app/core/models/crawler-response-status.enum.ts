// Request Status Enum Definition
export type CrawlerResponseStatus = -1 | 0 | 1;
export const CrawlerResponseStatus = {
    STARTED: 0 as CrawlerResponseStatus,
    ERRORS: -1 as CrawlerResponseStatus,
    COMPLETED: 1 as CrawlerResponseStatus
}
