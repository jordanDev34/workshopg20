import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeEventComponent } from './propose-event.component';

describe('ProposeEventComponent', () => {
  let component: ProposeEventComponent;
  let fixture: ComponentFixture<ProposeEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposeEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
