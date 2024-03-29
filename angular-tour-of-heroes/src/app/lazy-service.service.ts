import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


export interface Crisis {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class LazyServiceService implements
  Resolve<Crisis> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
    const c: Crisis = {
      id: 1,
      name: 'abc'
    };
    return of(c);
  }
}