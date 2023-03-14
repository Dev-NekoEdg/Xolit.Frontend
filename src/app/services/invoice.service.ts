import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../interfaces/invoice';
import { ResponseShoppingCartService } from '../interfaces/response-shopping-cart-service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private urlBase: string ="http://localhost:5158/v1/api/invoice";

  constructor(
    private http: HttpClient
  ) { }

  saveInvoice(invoice: Invoice): Observable<ResponseShoppingCartService> {
    return this.http.post<ResponseShoppingCartService>(this.urlBase,invoice);
  }

}
