export interface ShoppingCart {
    productoId: string;
    nombreProducto: string;
    descripcionProducto: string;
    precioUnitario: number;
    cantidad: number;
    precioTotal: number;
    porcentajeInpuesto: number;
    // images
    image: string;
    isImageBase64:boolean;
}
