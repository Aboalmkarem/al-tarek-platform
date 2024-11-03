
export function toLandingPage(navigate) {
    setTimeout(() => {
        navigate("/al-tarek-platform");
        window.location.reload();
        return;
    }, 500);
}

export function signOut(navigate) {
    localStorage.removeItem("token");
    toLandingPage(navigate);
}
