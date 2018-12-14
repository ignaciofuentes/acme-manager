import { Component, OnInit, NgZone } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title = "acme-manager";
  applications: any;
  constructor(private zone: NgZone, private service: DataService) {}

  ngOnInit() {
    console.log("loadData");
    this.loadData();
  }
  addNew() {
    this.service.addApplication();
  }
  loadData() {
    this.service.getApplications().subscribe(data => {
      this.zone.run(() => {
        this.applications = data;
      });
    });
  }
}
