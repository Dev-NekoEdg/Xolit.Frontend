# XolitShoppingCart


To avoiding initialize every variable:
add: ´"strictPropertyInitialization": false,´
on tsconfing.json file.


#### Retornar data de prueba

1. Crear la clase con las propiedades y los datos.
2. Agregarla a los Providers de app.podules
´
import { TestData } from './services/testData';
@NgModule({
  declarations: [],
  imports: [],
  providers: [TestData],
  bootstrap: [AppComponent]
})
export class AppModule { }
´
3. Se hace el import en el servicio, sin crear una propiedad en el constructor, y se llama a la propiedad con los datos que se requieren.
´getProducts(): Observable<Product[]> {
    //return this.http.get<Product[]>(this.urlApiProducts);
    const studentsObservable = new Observable<Product[]>(observer => {
      setTimeout(() => {
          observer.next(TestData.products);
      }, 1000);
    });
    
    return studentsObservable;
  }
´
#### Localstorage vs SessionStorage 

localStorage y sessionStorage son propiedades que acceden al objeto Storage y tienen la función de almacenar datos de manera local, la diferencia entre éstas dos es que localStorage almacena la información de forma indefinida o hasta que se decida limpiar los datos del navegador y sessionStorage almacena información mientras la pestaña donde se esté utilizando siga abierta, una vez cerrada, la información se elimina.
[Fuente](#https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage)


##### Modal Angular
Se intala el ng-bootstrap ´npm install --force @ng-bootstrap/ng-bootstrap´
guias: 
https://laratutorials.com/angular-13-bootstrap-modal-popup-example/

[Video](https://www.youtube.com/watch?v=_rMWS4Neckg&t=335s)


=======
# Xolit.Frontend
Frontend for Shopping Cart Xolit
