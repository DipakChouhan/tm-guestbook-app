import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGuestEntriesComponent } from './list-guest-entries.component';

describe('ListGuestEntriesComponent', () => {
  let component: ListGuestEntriesComponent;
  let fixture: ComponentFixture<ListGuestEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGuestEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGuestEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
