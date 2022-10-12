import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product";


export class TestData{

    public static products: Product[] = [
        {
            id:  "1", 
            nombre: "Cosa Uno", 
            valorVentaConIva: 10000, 
            cantidadUnidadesInventario: 5, 
            porcentajeIVAAplicado: 0.10,
            detalleProducto: "",
            urlProducto: "https://raw.githubusercontent.com/Dev-NekoEdg/public-images/main/Xolit-images/thinkpad395.jpg",
            isBase64Image: false
        },
        {id:  "2", nombre: "Cosa Dos", valorVentaConIva: 15000, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10,
        detalleProducto:"Cosa Dos",
        urlProducto:"https://raw.githubusercontent.com/Dev-NekoEdg/public-images/main/Xolit-images/teclado.jpeg",
        isBase64Image: false},
        {id:  "3", nombre: "Cosa Tres", valorVentaConIva: 30000, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10,detalleProducto:"sdfdsfs",
        urlProducto:"https://raw.githubusercontent.com/Dev-NekoEdg/public-images/main/Xolit-images/windows10.jpg",
        isBase64Image: false},
        {
            id:  "4", nombre: "Cosa Cuatro", valorVentaConIva: 8000, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10,
            detalleProducto:"sdfdsfs",
            urlProducto:"https://raw.githubusercontent.com/Dev-NekoEdg/public-images/main/Xolit-images/audifonos.jpg",
            isBase64Image: false
        },
        {id:  "5", 
        nombre: "Cosa Cinco", valorVentaConIva: 450000, cantidadUnidadesInventario: 5, porcentajeIVAAplicado: 0.10,
        detalleProducto:"cossas locasd salkdjsalkdf dsfhvkjsdvnajskd jdsvhkdsav ksdja dkfjs",
        urlProducto:"https://raw.githubusercontent.com/Dev-NekoEdg/public-images/main/Xolit-images/msi750.jpg",
        isBase64Image: false
    },
    ];

}