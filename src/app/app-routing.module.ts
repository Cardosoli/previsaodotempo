import { Routes, RouterModule } from '@angular/router';
import { DetalhamentoTempoComponent } from '../components/detalhamento-tempo/detalhamento-tempo.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/search', pathMatch: 'full' },
  {path: 'search', component: HomeComponent },
  {path: 'detalhes', component: DetalhamentoTempoComponent },
];


export const AppRoutingModule = RouterModule.forRoot(routes);