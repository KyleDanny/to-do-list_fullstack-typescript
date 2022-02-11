import { ObjectId } from "mongodb";

export default class Todo {
  constructor(public text: string, public _id: string) {}
}

// export class Todos {
//   constructor(public text: string, public _id: string) {}
// }