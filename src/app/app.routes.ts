import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        loadChildren: ()=>import('./land/land.module').then(m=>m.LandModule)
    }

];
