import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SocketService } from 'src/app/shared/services/socket.service';
import { environment } from '../../../environments/environment';
import { CrawlerActions, NotificationActions } from '../actions';
import { CrawlerNotification } from '../models/crawler-notification.model';
import * as fromRoot from '../../reducers';
import { NotificationType, Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class CrawlService {

  constructor(
    private http: HttpClient, private socketService: SocketService, private store: Store<fromRoot.State>,) {
        // Subscription to queue of update messages retrieved from API. For each change, shift and process;
        this.socketService.getMessageQueue().subscribe((queue: CrawlerNotification[]) => {
            if (queue && queue.length > 0) {
                const elementToUpdate = socketService.shiftMessage();
                this.store.dispatch(new CrawlerActions.CrawlURLUpdate(elementToUpdate.data));

                // Throw notification related
                let notification;
                if (elementToUpdate.data?.status == 1) {
                  notification = new Notification(null, 'New URL Processed !!', NotificationType.SUCCESS, 2000);
                } else {
                  notification = new Notification(null, ':( Unexpected error processing URL', NotificationType.ERROR, 2000);
                }
                this.store.dispatch(new NotificationActions.OpenNotification(notification))
            }
        })
  }

  crawlUrl(url){
    const body = JSON.stringify({ url: url, broadcastId: this.socketService.getBroadcastId() });
    return this.http.post(`${environment.apiBaseUrl}${environment.apiPath}/crawl`, body, {
        headers: this.getHeaders()
      });
  }

  private getHeaders() {
    let headers = {};
    headers['Content-Type'] = 'application/json';

    return new HttpHeaders(headers)
  }

}
