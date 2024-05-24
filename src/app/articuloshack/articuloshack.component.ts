import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/Inmueble';

@Component({
  selector: 'app-articuloshack',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './articuloshack.component.html',
  styleUrl: './articuloshack.component.css'
})
export class ArticuloshackComponent {
  @Input()
  id:number=0;

  constructor(private inmuebleService: InmuebleService){}
  articulos:Inmueble[]=[]

  ngOnInit(): void {
    this.articulos=this.inmuebleService.obtenerArticulosC();
}
}