import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventsComponent } from './card-events.component';

describe('CardEventsComponent', () => {
  let component: CardEventsComponent;
  let fixture: ComponentFixture<CardEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
