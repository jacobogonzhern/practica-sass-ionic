import { Component } from '@angular/core';
// Componentes standalone de Ionic que usa la plantilla.
// IonButton es necesario para poder usar <ion-button> en home.page.html;
// si no se importa, Angular no reconoce la etiqueta y da error de compilación.
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  // El componente enlaza un archivo .scss: Angular usa Sass por defecto
  // y lo compila automáticamente al ejecutar `ionic serve`.
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}
}
