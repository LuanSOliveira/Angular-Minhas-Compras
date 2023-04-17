import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPaiComponent } from './container-pai.component';

describe('ContainerPaiComponent', () => {
  let component: ContainerPaiComponent;
  let fixture: ComponentFixture<ContainerPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPaiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
