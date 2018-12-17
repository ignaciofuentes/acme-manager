import { Injectable } from "@angular/core";
import { Kinvey, CacheStore } from "kinvey-angular2-sdk";

export interface MortgageApplication {
  _id;
  dueDate: Date;
  photo;
  name;
  total;
  status;
}

@Injectable({
  providedIn: "root"
})
export class DataService {
  addApplication(): any {
    this.applicationsStore.save({
      _id: null,
      dueDate: new Date(),
      name: "test",
      photo:
        "https://demos.telerik.com/kendo-ui/content/web/Customers/ALFKI.jpg",
      status: "Approved",
      total: 1560000
    });
  }
  applicationsStore: CacheStore<MortgageApplication>;

  getApplications(): any {
    var query = new Kinvey.Query();
    query.descending("dueDate");
    return this.applicationsStore.find(query);
  }
  getSingleApplication(id): any {
    return this.applicationsStore.findById(id);
  }
  setApplicationStatus(mortgageApplication): any {
    return this.applicationsStore.save(mortgageApplication);
  }
  logout(): Promise<void> {
    return Kinvey.User.logout();
  }
  user: Kinvey.User;

  async loginWithMIC(redirectUri: string) {
    this.user = await Kinvey.User.loginWithMIC(redirectUri);

    return this.user;
  }
  async login(username: string, password: string): Promise<Kinvey.User> {
    this.user = await Kinvey.User.login(username, password);

    return this.user;
  }
  isLoggedIn(): boolean {
    let user = Kinvey.User.getActiveUser();
    console.log("user is:");
    console.log(user);
    return user != null;
  }

  constructor() {
    Kinvey.init({
      appKey: "kid_rJIq9LZxE",
      appSecret: "af356906be114653815617f03ac94a95"
    });
    this.applicationsStore = Kinvey.DataStore.collection<MortgageApplication>(
      "applications"
    );
  }
}
