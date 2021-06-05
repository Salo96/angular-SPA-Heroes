import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// rutas
import { APP_ROUTING } from './app.routes';

// servicios
import { HeroesService } from './servicio/heroes.service';


// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    // componente
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent
  ],
  imports: [
  // rutas
    BrowserModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    // servicios
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
