import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorosoulComponent } from './corosoul.component';

describe('CorosoulComponent', () => {
  let component: CorosoulComponent;
  let fixture: ComponentFixture<CorosoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorosoulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorosoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
