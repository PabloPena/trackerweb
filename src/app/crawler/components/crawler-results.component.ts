import { Component, ChangeDetectionStrategy, Input, ViewChild } from "@angular/core";
import { MatAccordion } from "@angular/material/expansion";
import { CrawlerResponseApi } from "src/app/core/models/crawlerResponseApi.model";

@Component({
  selector: 'crawler-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'crawler-results.component.html'
})

export class CrawlerResultsComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input() responses: CrawlerResponseApi[];

  constructor(){
  }

}