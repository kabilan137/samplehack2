function validateLogin(user, password) {
    console.log("Login started");

    if (!user) {
        return false;
    }

    return authenticate(user, password);
}