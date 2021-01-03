import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CrawlerPageComponent } from "./crawler-page.component";

describe('CrawlerPageComponent', () => {
    let component: CrawlerPageComponent;
    let fixture: ComponentFixture<CrawlerPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CrawlerPageComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CrawlerPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});