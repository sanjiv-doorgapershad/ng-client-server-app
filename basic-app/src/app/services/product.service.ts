import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ProductModel } from '../models/product.model';

import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {

  private productUrl = `${environment.baseUrlApi}/api/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productUrl).pipe(
      catchError(this.handleError('getProducts', []))
    );
  }

  getProduct(id: number): Observable<ProductModel> {
    const url = `${this.productUrl}/${id}`;

    return this.http.get<ProductModel>(url).pipe(
      catchError(this.handleError<ProductModel>('getProduct id=${id}'))
    );
  }

  searchProducts(searchParams: string): Observable<ProductModel[]> {
    const url = `${this.productUrl}/search/?name=${searchParams}&&code=${searchParams}`;

    return this.http.get<ProductModel[]>(url).pipe(
      catchError(this.handleError('getProducts', []))
    );
  }

  addProduct(product: ProductModel): Observable<any> {
    const url = `${this.productUrl}`;

    return this.http.post(url, product).pipe(
      catchError(this.handleError<ProductModel>('addProduct name=${product.name}'))
    );
  }

  deleteProduct(id: number): Observable<any> {
    const url = `${this.productUrl}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError<ProductModel>('deleteProduct id=${id}'))
    );
  }

  updateProduct(product: ProductModel): Observable<any> {
    const url = `${this.productUrl}/${product.id}`;

    return this.http.put(url, product).pipe(
      catchError(this.handleError<ProductModel>('updateProduct id=${product.id}'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
