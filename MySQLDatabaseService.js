import DatabaseService from "./DatabaseService.js";

class MySQLDatabaseService extends DatabaseService {
    connect() {
        console.log("Connected to MySQL");
    }

    getUserData() {
        return { db: "MySQL", user: "User from MySQL" };
    }
}

export default MySQLDatabaseService;
