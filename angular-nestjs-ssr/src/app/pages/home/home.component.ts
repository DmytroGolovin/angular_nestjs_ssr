import { Component } from '@angular/core';
import { HelloWorldService } from 'src/app/shared/services/api-consumers/hello-world.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _helloWorldService: HelloWorldService) {
  }

  ngOnInit() {
    this._helloWorldService.getData().subscribe(res => {
      console.log(res);
    });
  }
}
