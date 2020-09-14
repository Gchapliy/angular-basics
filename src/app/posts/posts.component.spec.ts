import {PostsComponent} from './posts.component';
import {PostsService} from './posts.service';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {of} from 'rxjs';
import {Test} from 'tslint';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent],
      providers: [PostsService],
      imports: [HttpClientModule]
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(PostsService);
  });

  it('should fetch posts on ngOnInit', function() {
    const posts = [1, 2, 3];
    spyOn(service, 'fetch').and.returnValue(of(posts));

    fixture.detectChanges();

    expect(component.posts).toEqual(posts);
  });

});