import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
    { path: '', component: LayoutComponent, children: [
    { path: '', redirectTo: 'analytics', pathMatch: 'full' },
    { path: 'analytics', loadChildren: () => import('../pages/analytics/analytics.module').then(m => m.AnalyticsModule) },
    { path: 'visits', loadChildren: () => import('../pages/visits/visits.module').then(m => m.VisitsModule) },
    // { path: 'charts', loadChildren: () => import('../pages/charts/charts.module').then(m => m.ChartsModule) },
    { path: 'profile', loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfileModule) },
    // { path: 'ecommerce', loadChildren: () => import('../pages/ecommerce/ecommerce.module').then(m => m.EcommerceModule) },
    { path: 'forms', loadChildren: () => import('../pages/forms/forms.module').then(m => m.FormModule) },
    { path: 'extra', loadChildren: () => import('../pages/extra/extra.module').then(m => m.ExtraModule) },
    { path: 'maps', loadChildren: () => import('../pages/maps/maps.module').then(m => m.MapsModule) },
    { path: 'widgets', loadChildren: () => import('../pages/widgets/widgets.module').then(m => m.WidgetsModule) },
  ]}
];

export const ROUTES = RouterModule.forChild(routes);
