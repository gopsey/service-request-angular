import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedSrListComponent } from './requested-sr-list.component';

describe('RequestedSrListComponent', () => {
  let component: RequestedSrListComponent;
  let fixture: ComponentFixture<RequestedSrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedSrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedSrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
