import {Component} from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
      <div class="post4">
          <h2>Post title</h2>
          <p>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur cumque explicabo, facere facilis, minima molestias nam nisi quasi repellendus repudiandae vero! Nemo, odio, unde? Deleniti ducimus facilis libero placeat.</span>
              <span>Assumenda eveniet laborum nam veniam. Fuga, iste, sit? Accusamus atque autem commodi cum distinctio eius exercitationem facilis fugiat in ipsa ipsum itaque laboriosam maiores minus, nesciunt, non nulla, placeat ratione.</span>
              <span>A, autem, dolore dolorem eaque id incidunt iusto maiores mollitia, natus nesciunt nobis provident quos veniam. Ad amet autem debitis dignissimos ea et excepturi facere quia repellat, tempora ut voluptatibus?</span>
          </p>
      </div>
  `,
  styles: [`
    .post4 {
        padding: .5rem;
        border: 2px solid black;
    }
    .h2 {
        font-size: 1rem;
    }
  `]
})

export class Post4Component {

}
