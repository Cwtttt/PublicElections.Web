import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElectionModalComponent } from './add-election-modal.component';

describe('AddElectionModalComponent', () => {
  let component: AddElectionModalComponent;
  let fixture: ComponentFixture<AddElectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddElectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
