import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiDetailComponent } from './heroi-detail.component';

describe('HeroiDetailComponent', () => {
  let component: HeroiDetailComponent;
  let fixture: ComponentFixture<HeroiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
