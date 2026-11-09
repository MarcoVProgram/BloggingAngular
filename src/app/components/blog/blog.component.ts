import { Component } from '@angular/core';
import { FormComponent } from '../../form/form.component';
import { NewBlockComponent } from '../../new-block/new-block.component';

@Component({
  imports: [FormComponent, NewBlockComponent],
  selector: 'app-blog',
  styleUrl: './blog.component.css',
  templateUrl: './blog.component.html',
})
export class BlogComponent {}
