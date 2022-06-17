import { Product } from "../interfaces/product";

export class TestData{

    public static products: Product[] = [
        {id:  "1", nombre: "Cosa Uno", valorVentaConIva: 10000, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10},
        {id:  "2", nombre: "Cosa Dos", valorVentaConIva: 0, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10},
        {id:  "3", nombre: "Cosa Tres", valorVentaConIva: 0, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10},
        {id:  "4", nombre: "Cosa Cuatro", valorVentaConIva: 0, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10},
        {id:  "5", nombre: "Cosa Cinco", valorVentaConIva: 0, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10},
    ];


  

}