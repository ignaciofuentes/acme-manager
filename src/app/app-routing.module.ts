import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginGuard } from "./login.guard";
import { LoginComponent } from "./login/login.component";
import { LoggedOutGuard } from "./logged-out.guard";
import { LayoutComponent } from "./layout/layout.component";
import { ApplicationDetailsComponent } from "./application-details/application-details.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "details/:id", component: ApplicationDetailsComponent }
    ],
    canActivate: [LoginGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoggedOutGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
