import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPMComponent } from './bpm.component';

describe('BPMComponent', () => {
  let component: BPMComponent;
  let fixture: ComponentFixture<BPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
