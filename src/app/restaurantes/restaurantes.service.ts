import {
  Injectable
} from "@angular/core";
import {
  Http
} from "@angular/http";
import {
  MEAT_API
} from "app/app.api";
import {
  Observable
} from "rxjs/Observable";
import {
  Restaurante
} from "./restaurante/restaurante";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {
  ErrorHanlder
} from "app/app.error-handler";
import { MenuItem } from "app/restaurante-detalhe/menu-item/menu-item.model";

@Injectable()
export class RestauranteService {

  constructor(private http: Http) {}

  restaurantes(): Observable < Restaurante[] > {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHanlder.handlerError);
  }

  restauranteById(id: string): Observable < Restaurante > {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHanlder.handlerError);
  }   

  reviewsOfRestaurants(id: string): Observable < any > {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHanlder.handlerError);
  } 

  menuOfRestaurante(id: string): Observable < MenuItem > {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHanlder.handlerError);
  }    
}
