import { Component } from "@angular/core"
import { UserService } from "./user.service"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "subject-tutorial"
  users: any[] = []

  constructor(private user: UserService) {
    console.log(">>> Application constructor")
    this.user.users$.subscribe(users => {
      this.users = users
      console.log(users)
    })

   // this.user.updateUsers() // hightlight-line
  }
}