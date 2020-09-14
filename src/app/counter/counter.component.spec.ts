import {CounterComponent} from './counter.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
  });

  it('should should be created', function() {
    expect(component).toBeDefined();
  });

  it('should render counter property', function() {
    component.counter = 42;

    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.counter'));
    let el: HTMLElement = de.nativeElement;

    expect(el.textContent).toContain('42');
  });
});
