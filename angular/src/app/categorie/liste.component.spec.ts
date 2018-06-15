import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCategorieComponent } from './liste.component';

describe('ListeCategorieComponent', () => {
  let component: ListeCategorieComponent;
  let fixture: ComponentFixture<ListeCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
