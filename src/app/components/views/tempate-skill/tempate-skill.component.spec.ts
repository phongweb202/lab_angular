import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempateSkillComponent } from './tempate-skill.component';

describe('TempateSkillComponent', () => {
  let component: TempateSkillComponent;
  let fixture: ComponentFixture<TempateSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempateSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
