import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InmuebleService } from '../_servicio/inmueble.service';
import { Inmueble } from '../_modelo/Inmueble';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  constructor(private inmuebleService: InmuebleService){}
  inmuebles:Inmueble[]=[]

  ngOnInit(): void {
    this.inmuebles=this.inmuebleService.obtenerInmueblesC();
  }

}
