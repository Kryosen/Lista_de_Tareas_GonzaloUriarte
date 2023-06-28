import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechBoxComponent } from './chech-box.component';

describe('ChechBoxComponent', () => {
  let component: ChechBoxComponent;
  let fixture: ComponentFixture<ChechBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChechBoxComponent]
    });
    fixture = TestBed.createComponent(ChechBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
