import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {}
  async logout() {
    await this.service.logout();
    this.router.navigate(["login"]);
  }
}
