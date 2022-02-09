"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const database_service_1 = require("./services/database.service");
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
(0, database_service_1.connectToDatabase)()
    .then(() => {
    app.use("/todos", todos_1.default);
    app.listen(3001);
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
// app.use('/todos', todoRoutes);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
// app.listen(3001);
