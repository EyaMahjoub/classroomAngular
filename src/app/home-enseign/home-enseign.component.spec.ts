import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnseignComponent } from './home-enseign.component';

describe('HomeEnseignComponent', () => {
  let component: HomeEnseignComponent;
  let fixture: ComponentFixture<HomeEnseignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeEnseignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEnseignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
