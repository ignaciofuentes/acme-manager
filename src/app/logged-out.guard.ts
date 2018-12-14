import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "./data.service";

@Injectable({
  providedIn: "root"
})
export class LoggedOutGuard implements CanActivate {
  constructor(private service: DataService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.service.isLoggedIn()) {
      console.log("is not logged in");
      return true;
    } else {
      console.log("already logged in. go to home page by default");
      return this.router.navigate(["home"]);
    }
  }
}
