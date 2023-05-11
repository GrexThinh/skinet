import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sever-error',
  templateUrl: './sever-error.component.html',
  styleUrls: ['./sever-error.component.scss'],
})
export class SeverErrorComponent {
  error: any;
  constructor(private router: Router) {
    const navaigation = this.router.getCurrentNavigation();
    this.error = navaigation?.extras?.state?.['error'];
  }
}
