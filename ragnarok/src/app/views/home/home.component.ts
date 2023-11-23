import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Products } from '../interface/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public product!: Products[]; 
  private _productsService = inject(ProductsService);

  public findAllProducts$ = this._productsService.findAllProducts$;

  ngOnInit(): void {
    this._productsService.findAllProducts();
  }
}
