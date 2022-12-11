import {getOAuthURL} from "../utils/oauthGoogle";

export default function Home() {
    return (
        <>
            <div>Home Page</div>
            <a href={getOAuthURL()}>Login with Google</a>
        </>
    );
}