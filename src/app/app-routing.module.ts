import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ForecastComponent} from "./pages/forecast/forecast.component";
import {SearchComponent} from "./pages/search/search.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full'
    },
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'search/forecast/:id',
      component: ForecastComponent
    },
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
