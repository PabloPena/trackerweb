import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CrawlerResultItems } from "./crawler-result-items.component";

describe('CrawlerResultItems', () => {
    let component: CrawlerResultItems;
    let fixture: ComponentFixture<CrawlerResultItems>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrawlerResultItems]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrawlerResultItems);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});