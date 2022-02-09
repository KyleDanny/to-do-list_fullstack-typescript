"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodos = void 0;
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const todos_1 = __importDefault(require("../models/todos"));
const getTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const todos = (yield ((_a = database_service_1.collections.list) === null || _a === void 0 ? void 0 : _a.find({}).toArray()));
    res.status(200).send(todos);
});
exports.getTodos = getTodos;
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const text = req.body.text;
    const newTodo = new todos_1.default(text);
    yield ((_b = database_service_1.collections.list) === null || _b === void 0 ? void 0 : _b.insertOne(newTodo));
    res.status(201).json({ message: 'Created the todo', createdTodo: newTodo });
});
exports.createTodo = createTodo;
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = req.params.id;
    const updatedText = req.body;
    const query = { _id: new mongodb_1.ObjectId(id) };
    yield database_service_1.collections.list.updateOne(query, { $set: updatedText });
    const todos = (yield ((_c = database_service_1.collections.list) === null || _c === void 0 ? void 0 : _c.find({}).toArray()));
    res.status(200).json({ message: 'Updated!', updatedTodos: todos });
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _d, _e;
    const id = req.params.id;
    const query = { _id: new mongodb_1.ObjectId(id) };
    const result = yield ((_d = database_service_1.collections.list) === null || _d === void 0 ? void 0 : _d.deleteOne(query));
    const todos = (yield ((_e = database_service_1.collections.list) === null || _e === void 0 ? void 0 : _e.find({}).toArray()));
    res.status(202).json({ message: `Successfully removed game with id ${id}`, updatedTodos: todos });
});
exports.deleteTodo = deleteTodo;
