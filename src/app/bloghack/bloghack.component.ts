import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bloghack',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bloghack.component.html',
  styleUrl: './bloghack.component.css'
})
export class BloghackComponent {
  articulos= [
    {id:'1',nombre:'Hacking etico',descripcion:' Los procesos que se efectúan con el fin de verificar la integridad de una entidad gubernamental o privada y detectar las vulnerabilidades potenciales',imagen:'https://th.bing.com/th/id/OIP.TD_cTLcpfA9WGcRW3uMu_AHaD4?w=336&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'},
    {id:'2',nombre:'Legislacion de seguridad europea ',descripcion:'La Comisión ha presentado una visión para construir una nueva unidad informática conjunta para hacer frente al creciente número de ciberincidentes graves que afectan a todos.',imagen:'https://www.secureit.es/wp-content/uploads/2018/11/Real-Decreto-Directiva-NIS.png'},
    {id:'3',nombre:'¿Como evitar que te hackeen la cuenta? ',descripcion:'La seguridad online se ha convertido en una asignatura obligatoria para cualquier ciudadano de a pie',imagen:'https://www.movilzona.es/app/uploads-movilzona.es/2021/12/seguridad-movil-android-930x487.jpg'},
    {id:'4',nombre:'¿Que es el phising?',descripcion:'El phishing es un método que los ciber delincuentes utilizan para engañar y conseguir que se revele información personal,',imagen:'https://th.bing.com/th/id/OIP.UYLoTkpfkTKERZRBlx3PoAHaE8?rs=1&pid=ImgDetMain'},
  ];
}
