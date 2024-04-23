import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  articulos= [
    {id:'1',nombre:'Casa con vistas al mar',descripcion:'El océano puede ser contemplado prácticamente desde todos los rincones de la vivienda y el uso de grandes ventanas y paredes de cristal ayudan a conseguir este objetivo. Una casa de ensueño donde más de uno querría pasar toda su vida',imagen:'https://th.bing.com/th/id/R.6e30e750e42bcdb1657d8795fc444cc3?rik=mxSyht%2fOYl92oQ&riu=http%3a%2f%2farquitecturaideal.com%2fwp-content%2fuploads%2f2015%2f01%2fcasa-vistas-oceano-4.jpg&ehk=j6EzsTZXyJBWH8P9keqdAJxWkn%2frZFPhBw4qg3BhsOs%3d&risl=&pid=ImgRaw&r=0'},
    {id:'2',nombre:'Cabaña en la montaña ',descripcion:'Abandonen sus horarios de oficina, sus traslados diarios, el ajetreo de la vida en la ciudad y el estrés, para visitar esta impresionante cabaña en los bosques de la Columbia Británica.',imagen:'https://static.mansionglobal.com/production/media/article-images/40aa54ac9ed0f893fcc70ce849a0972a/large_BN-LR207_1221SK_GR_20151211154405.jpg'},
    {id:'3',nombre:'Piso en madrid ',descripcion:'En la mejor zona del barrio de Almagro presentamos en exclusiva este maravilloso piso reformado. Se trata de una vivienda en una ubicación privilegiada, completamente exterior salvo la cocina, con dos habitaciones y tres baños y plaza de garaje con acceso directo incluida en el precio.',imagen:'https://www.john-taylor.es/alquiler-piso-madrid-ori100-L1036MA-80978810.jpg?datetime=2020-09-13'},
    {id:'4',nombre:'Mansion norte ',descripcion:'Esta villa es muy famosa en Italia y en muchas partes del mundo. Conocida como Villa Sola Cabiati y situada a orillas del lago de Como, en la región de Lombardía, es la antigua residencia de verano de los Duques de Serbelloni',imagen:'https://th.bing.com/th/id/R.f16ccb8d978b115d2eea0fb2f4579122?rik=BBV9Fn033Wn0Ug&pid=ImgRaw&r=0'},
    {id:'5',nombre:'Mansion sur ',descripcion:'Esta vez volamos hasta bel air, en la ciudad de los ángeles, california, donde se encuentra esta mega-mansión de más de 3.700 m2 y nada menos que 28 dormitorios. Destaca la piscina exterior y la zona de relax desde la que ver el mar',imagen:'https://st3.idealista.com/news/archivos/styles/fullwidth_xl_2x/public/2012-02/casa-ensueno-bel-air4_0.jpg?VersionId=BuO8RtfoFYJtha3UN64HCkj3.j06d.dl&itok=7ggVb2N_'},
    {id:'6',nombre:'Casa pueblo ',descripcion:'Lo mejor de esta casa es que podrás disfrutar de la playa que se encuentra a unos escasos 100 metros de distancia.La vivienda está dividida en dos plantas que constan de salón, comedor, cocina independiente, un aseo, patio interior con jardín y garaje en la planta baja. En la planta superior hay tres dormitorios y un cuarto de baño.',imagen:'https://www.fotocasa.es/blog/wp-content/uploads/2019/10/6.casas_-768x431.jpg'}

  ];

}
