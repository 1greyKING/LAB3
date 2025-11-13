import UserManager from "./UserManager.js";
import MySQLDatabaseService from "./MySQLDatabaseService.js";
import SQLServerDatabaseService from "./SQLServerDatabaseService.js";
import PostgreSQLDatabaseService from "./PostgreSQLDatabaseService.js";

const mysqlService = new MySQLDatabaseService();
const sqlService = new SQLServerDatabaseService();
const postgresService = new PostgreSQLDatabaseService();

console.log("=== MySQL UserManager ===");
const user1 = new UserManager(mysqlService);
user1.init();
console.log(user1.getUserData());

console.log("=== SQL Server UserManager ===");
const user2 = new UserManager(sqlService);
user2.init();
console.log(user2.getUserData());
sqlService.closeSQLServerConnection();

console.log("=== PostgreSQL UserManager ===");
const user3 = new UserManager(postgresService);
user3.init();
console.log(user3.getUserData());
postgresService.rollbackTransaction();
