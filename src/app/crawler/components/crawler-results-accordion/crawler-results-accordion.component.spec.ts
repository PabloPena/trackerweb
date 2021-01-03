import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CrawlerResultsAccordionComponent } from "./crawler-results-accordion.component";

describe('CrawlerResultsAccordionComponent', () => {
    let component: CrawlerResultsAccordionComponent;
    let fixture: ComponentFixture<CrawlerResultsAccordionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrawlerResultsAccordionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrawlerResultsAccordionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});