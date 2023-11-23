import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Products } from '../interface/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _http = inject(HttpClient);

  private _findAllProductsSubject = new BehaviorSubject<Products[]>([]);
  public findAllProducts$ = this._findAllProductsSubject.asObservable();

  public findAllProducts(): void {
    this._http.get<Products[]>(environment.apiurl).pipe(take(1)).subscribe(products => {
      this._findAllProductsSubject.next(products);
    })
  }
}
