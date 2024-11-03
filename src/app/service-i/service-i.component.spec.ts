import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIComponent } from './service-i.component';

describe('ServiceIComponent', () => {
  let component: ServiceIComponent;
  let fixture: ComponentFixture<ServiceIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
