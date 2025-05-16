import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevoirComponent } from './add-devoir.component';

describe('AddDevoirComponent', () => {
  let component: AddDevoirComponent;
  let fixture: ComponentFixture<AddDevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
