import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandidatesComponent } from './edit-candidates.component';

describe('EditCandidatesComponent', () => {
  let component: EditCandidatesComponent;
  let fixture: ComponentFixture<EditCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
