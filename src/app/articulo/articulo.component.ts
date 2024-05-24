import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/Inmueble';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent implements OnInit {
  
  @Input()
  id:number=0;

  constructor(private inmuebleService: InmuebleService){}
  inmuebles:Inmueble[]=[]

  ngOnInit(): void {
    this.inmuebles=this.inmuebleService.obtenerInmuebles();
  }

}
