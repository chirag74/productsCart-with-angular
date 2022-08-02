import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable,map} from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductmanagementServiceService {
 
  
  private baseUrl="http://localhost:8080/api/prod";
  private baseDUrl="http://localhost:8080/api/category";


  constructor(private httpclient : HttpClient) { }
  getAllProducts() : Observable<Product[]>{
    
    return this.httpclient.get<GetAllsProducts>(this.baseUrl)
    .pipe(map(response => response._embedded.products));
  }
  getAllProductCategory():Observable<ProductCategory[]>{
    return this.httpclient.get<GetAllsProductsCategory>(this.baseDUrl)
    .pipe(map(response => response._embedded.productCategories));

  }
}


  interface GetAllsProducts{
    _embedded :{
      products : Product[]
    }
  
  
  }
  
  interface GetAllsProductsCategory{
    _embedded :{
      productCategories :ProductCategory[];
    }
   
   }
