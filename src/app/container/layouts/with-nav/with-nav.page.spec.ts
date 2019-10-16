import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithNavPage } from './with-nav.page';

describe('WithNavPage', () => {
  let component: WithNavPage;
  let fixture: ComponentFixture<WithNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithNavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
