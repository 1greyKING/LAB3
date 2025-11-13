class UserManager {
    constructor(databaseService) {
        this.db = databaseService;
    }

    init() {
        this.db.connect();
        console.log("UserManager initialized");
    }

    getUserData() {
        return this.db.getUserData();
    }
}

export default UserManager;
