import { Routes } from '@angular/router';
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {RemodelerSearchComponent} from "./reStyle/remodeler/components/remodeler-search/remodeler-search.component";
import {ComingSoonComponent} from "./public/pages/coming-soon/coming-soon.component";
import {RemodelerDetailComponent} from "./reStyle/remodeler/components/remodeler-detail/remodeler-detail.component";
import {ContracterProfileComponent} from "./reStyle/profiles/components/contracter-profile/contracter-profile.component";
import {RemodelerProfileComponent} from "./reStyle/profiles/components/remodeler-profile/remodeler-profile.component";
import {CreateReviewComponent} from "./reStyle/contracter/components/create-review/create-review.component";
import {TrackingDetailComponent} from "./reStyle/tracking/components/tracking-detail/tracking-detail.component";
import {PortfolioComponent} from "./reStyle/portfolio/portfolio.component";
import {SupportComponent} from "./reStyle/support/support.component";
import {SignUpComponent} from "./reStyle/security/pages/sign-up/sign-up.component";
import {SignInComponent} from "./reStyle/security/pages/sign-in/sign-in.component";

export const routes: Routes = [

  {path:'home',  component: HomeComponent},
  {path: 'home/sign-up', component: SignUpComponent},
  {path: 'home/sign-in', component: SignInComponent},
  {path: 'home/profile/contractor/:id', component: ContracterProfileComponent},
  {path: 'home/profile/remodeler/:id', component: RemodelerProfileComponent},
  {path: 'home/remodeler/tracking', component: TrackingDetailComponent},
  {path: 'reviews', component: CreateReviewComponent},
  {path: 'business', component: RemodelerSearchComponent},
  {path: 'business/:id', component: RemodelerDetailComponent},
  {path: 'coming-soon', component: ComingSoonComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'support', component: SupportComponent},
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', component: PageNotFoundComponent},
];
