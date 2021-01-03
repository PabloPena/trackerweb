import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { CrawlerResponse } from "src/app/core/models/crawler-response.model";
import { SimpleDialogComponent } from "src/app/shared/components/simple-dialog/simple-dialog.component";

@Component({
  selector: 'crawler-result-items',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'crawler-result-items.component.html'
})

export class CrawlerResultItems {
  @Input() item: CrawlerResponse;
  @Output() discard = new EventEmitter<CrawlerResponse>();;

  constructor(public dialog: MatDialog) {
  }

  discardItem() {
    this.openDiscardDialog();
  }

  openDiscardDialog() {
    const dialogRef = this.dialog.open<SimpleDialogComponent>(SimpleDialogComponent, {
      data: {
        title: `Discard URL results`,
        htmlContent: `<p>Results associated with the URL <b><i>${this.item.requestedUrl}</i></b> will be removed. </br></br>Are you sure?<p>`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.discard.emit(this.item);
    });
  }

}