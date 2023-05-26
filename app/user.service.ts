import { Injectable } from "@angular/core"
import { Subject } from "rxjs" // hightlight-line
import { BehaviorSubject } from "rxjs"
// hightlight-start
const users = [
  {
    id: 1,
    name: "Naruto",
    username: "Uzumaki",
  },
  {
    id: 2,
    name: "Sasuke",
    username: "Uchiha",
  },
  {
    id: 3,
    name: "Obito",
    username: "Uchiha",
  },
]
// hightlight-end

@Injectable({
    providedIn: "root",
  })
  export class UserService {
   // users$ = new Subject<any>()
    users$ = new BehaviorSubject<any>(undefined) 
    constructor() {
      this.users$.next(users)
    }
  
    // hightlight-start
    // updateUsers() {
    //   this.users$.next([users[0]])
    // }
    // // hightlight-end
  }