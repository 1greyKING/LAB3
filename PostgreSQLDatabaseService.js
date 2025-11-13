import DatabaseService from "./DatabaseService.js";

class PostgreSQLDatabaseService extends DatabaseService {
    connect() {
        console.log("Connected to PostgreSQL");
    }

    getUserData() {
        return { db: "PostgreSQL", user: "User from PostgreSQL" };
    }

    rollbackTransaction() {
        console.log("Transaction rolled back in PostgreSQL.");
    }
}

export default PostgreSQLDatabaseService;
