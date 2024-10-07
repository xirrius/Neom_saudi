import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { UpcomingEventsComponent } from './pages/upcoming-events/upcoming-events.component';


export const routes: Routes = [

    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
           {
             path:'dashboard',
            component:DashboardComponent,
        },
        {
            path:'favorites',
            component: FavoritesComponent,
        },
        {
            path:'upcoming-event',
            component:UpcomingEventsComponent
        }
 
        ]
    }
];
