function validateLogin(user, password) {
    if (!user || !password) {
        throw new Error("Missing credentials");
    }
    console.log("Login started");
    return authenticate(user, password);
}
