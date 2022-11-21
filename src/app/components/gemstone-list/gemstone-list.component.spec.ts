import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GemstoneListComponent } from './gemstone-list.component';

describe('GemstoneListComponent', () => {
  let component: GemstoneListComponent;
  let fixture: ComponentFixture<GemstoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GemstoneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GemstoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
