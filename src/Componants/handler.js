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
    // console.log("Signing out");
    toLandingPage(navigate);
}

// export async function accessUser(setIsAuthenticated, setUserName, setShowMSG) {
//     const reqOptions = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//     };
//     await axios
//         .get(
//             `${process.env.REACT_APP_NOT_SECRET_CODE}/api/users/me`,
//             reqOptions
//         )
//         .then((res) => {
//             // console.log(res.data.username);
//             setUserName(res.data.username);
//         })
//         .catch((err) => {
//             console.log(err);
//             if (err.status === 403 || err.status === 401) {
//                 setIsAuthenticated(false);
//             }
//             if (err.response === undefined) {
//                 console.log(err.message);
//                 setShowMSG({
//                     show: true,
//                     message: err.message,
//                     isErr: true
//                 });
//             }
//         });
// }
