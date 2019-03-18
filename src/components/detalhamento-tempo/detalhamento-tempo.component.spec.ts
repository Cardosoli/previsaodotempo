import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoTempoComponent } from './detalhamento-tempo.component';

describe('DetalhamentoTempoComponent', () => {
  let component: DetalhamentoTempoComponent;
  let fixture: ComponentFixture<DetalhamentoTempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhamentoTempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhamentoTempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
