import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinethroughBoxComponent } from './linethrough-box.component';

describe('LinethroughBoxComponent', () => {
  let component: LinethroughBoxComponent;
  let fixture: ComponentFixture<LinethroughBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinethroughBoxComponent]
    });
    fixture = TestBed.createComponent(LinethroughBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
