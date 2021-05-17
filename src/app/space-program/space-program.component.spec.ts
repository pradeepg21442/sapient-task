import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceProgramComponent } from './space-program.component';

describe('SpaceProgramComponent', () => {
  let component: SpaceProgramComponent;
  let fixture: ComponentFixture<SpaceProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
