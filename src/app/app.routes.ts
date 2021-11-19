import {
  Routes
} from "@angular/router";
import {
  AboutComponent
} from "./about/about.component";
import {
  HomeComponent
} from "./home/home.component";
import {
  MenuComponent
} from "./restaurante-detalhe/menu/menu.component";
import {
  RestauranteDetalheComponent
} from "./restaurante-detalhe/restaurante-detalhe.component";
import {
  ReviewsComponent
} from "./restaurante-detalhe/reviews/reviews.component";
import {
  RestaurantesComponent
} from "./restaurantes/restaurantes.component";

export const ROUTES: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'restaurantes',
    component: RestaurantesComponent
  },
  {
    path: 'restaurantes/:id',
    component: RestauranteDetalheComponent,
    children: [{
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'reviews',
        component: ReviewsComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
]
