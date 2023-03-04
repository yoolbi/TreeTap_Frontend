import urlJoin from "url-join";

function parseJSON(response) {
    return response
        .json()
        .then((data) => ({ status: response.status, body: data }));
}

export const signUpAPIMethod = async (name, password) => {
    return await fetch(
        urlJoin(
            process.env.REACT_APP_BACKEND_URL + "/apps/auth/signup"
        ),
        {
            credentials: "include",
            method: "POST",
            body: JSON.stringify({ emailAddress: name, password: password }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        }
    ).then(parseJSON);
};

export const loginAPIMethod = async (name, password) => {
    return await fetch(
        urlJoin(
            process.env.REACT_APP_BACKEND_URL + "/apps/auth/login"
        ),
        {
            credentials: "include",
            method: "POST",
            body: new URLSearchParams({ username: name, password: password }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    ).then(parseJSON);
};