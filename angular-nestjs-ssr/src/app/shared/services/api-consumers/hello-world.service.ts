import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private _baseService: BaseService) { }

  public getData(): Observable<any> {
    return this._baseService.get("/api/hello-world");
  }
}
