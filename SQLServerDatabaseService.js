import DatabaseService from "./DatabaseService.js";

class SQLServerDatabaseService extends DatabaseService {
    connect() {
        console.log("Connected to SQL Server");
    }

    getUserData() {
        return { db: "SQL Server", user: "User from SQL Server" };
    }

    closeSQLServerConnection() {
        console.log("SQL Server connection closed.");
    }
}

export default SQLServerDatabaseService;
