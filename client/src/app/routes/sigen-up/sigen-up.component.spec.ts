import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigenUpComponent } from './sigen-up.component';

describe('SigenUpComponent', () => {
  let component: SigenUpComponent;
  let fixture: ComponentFixture<SigenUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigenUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigenUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
