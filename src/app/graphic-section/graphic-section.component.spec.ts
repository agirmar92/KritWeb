import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicSectionComponent } from './graphic-section.component';

describe('GraphicSectionComponent', () => {
  let component: GraphicSectionComponent;
  let fixture: ComponentFixture<GraphicSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
