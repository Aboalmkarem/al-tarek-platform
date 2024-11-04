import axios from "axios";

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

export async function getUser() {
    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };
    return await axios
        .get(
            `${process.env.REACT_APP_NOT_SECRET_CODE}/api/users/me`,
            reqOptions
        )
}