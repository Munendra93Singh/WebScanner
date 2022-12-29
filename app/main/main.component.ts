import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() value = new EventEmitter();

  sendTrue(data: any) {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
