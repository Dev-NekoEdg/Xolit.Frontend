export interface Product {
    productoId: number;
    nombre: string;
    valorVentaConIva: number;
    cantidadUnidadesInventario: number;
    porcentajeIVAAplicado: number;
    detalleProducto: string;
    urlProducto: string;
    isBase64Image: boolean;
}
