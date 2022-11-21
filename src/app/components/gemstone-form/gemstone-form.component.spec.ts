import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemstoneFormComponent } from './gemstone-form.component';

describe('GemstoneFormComponent', () => {
  let component: GemstoneFormComponent;
  let fixture: ComponentFixture<GemstoneFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemstoneFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemstoneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
