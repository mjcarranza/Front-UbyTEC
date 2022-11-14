import { Injectable, Output, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @Output() dispAuth : EventEmitter<any> = new EventEmitter();
  constructor() { }
}
