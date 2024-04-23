import { Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { BlogComponent } from './blog/blog.component';
import { ArticuloshackComponent } from './articuloshack/articuloshack.component';
import { BloghackComponent } from './bloghack/bloghack.component';

export const routes: Routes = [
    //{path:'articulo/:id',component: ArticuloComponent},
    //{path: 'blog', component: BlogComponent},
    //{path: '',redirectTo:'blog',pathMatch:'full'}
    {path:'articulo/:id',component: ArticuloshackComponent},
    {path: 'blog', component: BloghackComponent},
    {path: '',redirectTo:'blog',pathMatch:'full'}

];
