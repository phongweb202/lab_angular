import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProjectComponent } from './template-project.component';

describe('TemplateProjectComponent', () => {
  let component: TemplateProjectComponent;
  let fixture: ComponentFixture<TemplateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
