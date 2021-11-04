import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthComponent } from './Auth/auth.component';
import { MainComponent } from './Content/Pages/main.component';
import { NavbarComponent } from './Content/Components/navbar/navbar.component';
import { PrincipalComponent } from './Content/Pages/main/main.component';
import { CardSimpleComponent } from './Content/Components/card-simple/card-simple.component';
import { CarouselComponent } from './Content/Components/carousel/carousel.component';
import { CategoriasComponent } from './Content/Components/categorias/categorias.component';
import { MisionVisionComponent } from './Content/Components/mision-vision/mision-vision.component';
import { DetailComponent } from './Content/Pages/detail/detail.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { CreateProyectComponent } from './Content/Pages/create-proyect/create-proyect.component';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// Import the plugin code
import * as FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import * as FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import { DescriptionComponent } from './Content/Components/description/description.component';
import { DonateComponent } from './Content/Components/donate/donate.component';

// Register the plugin
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    PrincipalComponent,
    MainComponent,
    CardSimpleComponent,
    CarouselComponent,
    CategoriasComponent,
    MisionVisionComponent,
    DetailComponent,
    CreateProyectComponent,
    DescriptionComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FilePondModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
