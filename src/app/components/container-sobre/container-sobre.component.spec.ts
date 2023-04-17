import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSobreComponent } from './container-sobre.component';

describe('ContainerSobreComponent', () => {
  let component: ContainerSobreComponent;
  let fixture: ComponentFixture<ContainerSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSobreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
