function setCookies(name, value, date) {
    let expires = ""
    if (date) {
        const expiresDate = new Date(date);

        expires = "; expires=" + expiresDate.toUTCString();
    }
}