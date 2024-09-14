import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularTodoListComponent } from './angular-todo-list.component';

describe('AngularTodoListComponent', () => {
  let component: AngularTodoListComponent;
  let fixture: ComponentFixture<AngularTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTodoListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
