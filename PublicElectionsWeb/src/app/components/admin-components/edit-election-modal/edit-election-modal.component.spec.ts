import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditElectionModalComponent } from './edit-election-modal.component';

describe('EditElectionModalComponent', () => {
  let component: EditElectionModalComponent;
  let fixture: ComponentFixture<EditElectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditElectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditElectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
