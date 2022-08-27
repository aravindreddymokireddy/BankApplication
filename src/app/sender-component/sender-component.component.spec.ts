import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderComponentComponent } from './sender-component.component';

describe('SenderComponentComponent', () => {
  let component: SenderComponentComponent;
  let fixture: ComponentFixture<SenderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
