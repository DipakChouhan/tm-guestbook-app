import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllEntriesComponent } from './list-all-entries.component';

describe('ListAllEntriesComponent', () => {
  let component: ListAllEntriesComponent;
  let fixture: ComponentFixture<ListAllEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
