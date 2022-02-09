import { ObjectId } from "mongodb";

export class Todo {
  constructor(public text: string, public id: string) {}
}