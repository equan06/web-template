import axios from "axios";
export async function getGoogleOAuthTokens(code) {
    const url = "https://oauth2.googleapis.com/token";

    const values = {
        code: code,
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
        client_secret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
        grant_type: "authorization_code"
    };
    console.log("posting values", values);

    try {
        const res = await axios.post(
            url, 
            values, 
            {
                headers: {
                    "Content-Type": "application/json"
                }
            });
        return res.data;
    }
    catch (error) {
        console.log(error.response.data.error);
        throw new Error(error.message);
    }
}


export function getOAuthURL() {
    const rootURL = "https://accounts.google.com/o/oauth2/v2/auth";

    const options = { 
        redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
        client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ].join(" ")
    };

    const queryString = new URLSearchParams(options);

    return `${rootURL}?${queryString.toString()}`;
}