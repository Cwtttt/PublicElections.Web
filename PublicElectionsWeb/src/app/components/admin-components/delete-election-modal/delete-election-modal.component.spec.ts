import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteElectionModalComponent } from './delete-election-modal.component';

describe('DeleteElectionModalComponent', () => {
  let component: DeleteElectionModalComponent;
  let fixture: ComponentFixture<DeleteElectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteElectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteElectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
