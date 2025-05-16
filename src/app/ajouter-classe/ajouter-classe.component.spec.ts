import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterClasseComponent } from './ajouter-classe.component';

describe('AjouterClasseComponent', () => {
  let component: AjouterClasseComponent;
  let fixture: ComponentFixture<AjouterClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
