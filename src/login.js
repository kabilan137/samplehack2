function validateLogin(user, password) {
    if (!password) return false;
    return authenticate(user, password);
}