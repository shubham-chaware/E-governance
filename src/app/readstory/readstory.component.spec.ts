import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadstoryComponent } from './readstory.component';

describe('ReadstoryComponent', () => {
  let component: ReadstoryComponent;
  let fixture: ComponentFixture<ReadstoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadstoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
