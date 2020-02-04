import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ContactComponent } from './contact/contact.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AdditionComponent } from './addition/addition.component';
import { CompteurComponent } from './compteur/compteur.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'addition', component: AdditionComponent },
  { path: 'compteur', component: CompteurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
