import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'patricio';
  nombreUpper: string = 'PATRICIO';
  nombreCompleto:string = 'pATricio DIaz';

  fecha: Date = new Date();


}
