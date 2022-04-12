import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSchoolComponent } from './template-school.component';

describe('TemplateSchoolComponent', () => {
  let component: TemplateSchoolComponent;
  let fixture: ComponentFixture<TemplateSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
