import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurante } from 'app/restaurantes/restaurante/restaurante';
import { RestauranteService } from 'app/restaurantes/restaurantes.service';

@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {

  restaurante: Restaurante;

  constructor(private restauranteService: RestauranteService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.restauranteById(this.route.snapshot.params['id'])
    .subscribe(restaurante => this.restaurante = restaurante)
  }

}
