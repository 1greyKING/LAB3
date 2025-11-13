class DatabaseService {
    connect() {
        throw new Error("connect() must be implemented");
    }

    getUserData() {
        throw new Error("getUserData() must be implemented");
    }
}

export default DatabaseService;
