import { InvoiceProducts } from "./invoice-products";

export interface Invoice {
    givenNames: string;
    surName: string;
    identification: string;
    phoneNumber: string;
    deliveryAddress:string;
    emailAddress: string;
    deliveryDate: Date;
    saleDate: Date;
    total: number;
    
    products: InvoiceProducts[];
}
