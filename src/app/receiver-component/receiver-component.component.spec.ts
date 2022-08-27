import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverComponentComponent } from './receiver-component.component';

describe('ReceiverComponentComponent', () => {
  let component: ReceiverComponentComponent;
  let fixture: ComponentFixture<ReceiverComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
