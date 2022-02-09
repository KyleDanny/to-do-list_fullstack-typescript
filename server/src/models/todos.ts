import { ObjectId } from "mongodb";

export default class Todo {
  constructor(public text: string, public _id?: ObjectId) {}
}