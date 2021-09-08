import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateListComponent } from './user-create-list.component';

describe('UserCreateListComponent', () => {
  let component: UserCreateListComponent;
  let fixture: ComponentFixture<UserCreateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
