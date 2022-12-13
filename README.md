# XolitShoppingCart


To avoiding initialize every variable:
add: `"strictPropertyInitialization": false,`
on tsconfing.json file.


#### Retornar data de prueba

1. Crear la clase con las propiedades y los datos.
2. Agregarla a los Providers de app.podules

  ```typescript
  import { TestData } from './services/testData';
  @NgModule({
      declarations: [],
        imports: [],
         providers: [TestData],
         bootstrap: [AppComponent]
         })
    export class AppModule { }
  ```
  
  3. Se hace el import en el servicio, sin crear una propiedad en el constructor, y se llama a la propiedad con los datos que se requieren.
  ```typescript
  getProducts(): Observable<Product[]> {
    //return this.http.get<Product[]>(this.urlApiProducts);
    const studentsObservable = new Observable<Product[]>(observer => {
      setTimeout(() => {
          observer.next(TestData.products);
      }, 1000);
    });
    return studentsObservable;
  }
```
#### Localstorage vs SessionStorage 

localStorage y sessionStorage son propiedades que acceden al objeto Storage y tienen la función de almacenar datos de manera local, la diferencia entre éstas dos es que localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador y sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina.
[Fuente](#https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage)

#### Formularios pequeños

Siempre que se usen formularios Reactivos y por template, siempre se debe de aggregar el FormsModule en el app.modules:
`import { FormsModule } from '@angular/forms';`

##### Modal Angular
Se intala el ng-bootstrap ´npm install --force @ng-bootstrap/ng-bootstrap´
guias: 
https://laratutorials.com/angular-13-bootstrap-modal-popup-example/

[Video](https://www.youtube.com/watch?v=_rMWS4Neckg&t=335s)

##### Observable
Se crea un Subject, se inicializa y se coloca un método que retorne el subject.asObservable().
ejemplo: ShoppingCartService.
Corrección(2022-10-26): 


##### Renderizado de imagenes 
se puede obtener una imagen de una url o directamente del servicio en base 64.
Ejemplo: ´'data:image/png;base64,' + x.urlProducto´

##### Footer
El footer si tiene el position: absolute y no esta contenido en un elemento que tenga posicion, toma el pósition del viewport. Por eso el footer queda en medio de la pantalla cuando hay mucha información.


##### Conversiones

Para conversiones rápida se puede usar un más(+) antes de la variable. ` +variable`

*Math.floor* :  toma la parte entera de un numero.

*Math.round* : redondea el número según la parte decimal. Este retorna un entero.


------
# Xolit.Frontend
Frontend for Shopping Cart Xolit

```typescript
console.log('hello world');
```