import { useSession, signIn, signOut } from "next-auth/react";
import Button from "react-bootstrap/Button";

// const styles = {
//     "color": "#AFDCEB",
//     "background-color": "#AFDCEB"
// };

export default function LoginButton() {
    const { data: session } = useSession();
    if (session) {
        return <Button variant="outline-primary" onClick={() => signOut()}>Log out</Button>;
    }
    else {
        return <Button variant="primary" onClick={() => signIn()}>Log in</Button>;
    }
}