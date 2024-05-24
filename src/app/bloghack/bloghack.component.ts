import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/Inmueble';

@Component({
  selector: 'app-bloghack',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bloghack.component.html',
  styleUrl: './bloghack.component.css'
})
export class BloghackComponent {
  constructor(private inmuebleService: InmuebleService){}
  inmuebles:Inmueble[]=[]

  ngOnInit(): void {
    this.inmuebles=this.inmuebleService.obtenerArticulosC();
  }
}
