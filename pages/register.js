import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as React from "react";
import debounce from "lodash/debounce";


function validatePassword(password) {
    if (password === "" || password === null) return false;
    const passRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*]).{8,}$/g);
    return password.match(passRegex) !== null;
}

function validateEmail(email) {
    if (email === "" || email === null) return false;
    const emailRegex = new RegExp(/^(.+)(@)(.+)$/g); // very simple, email activation will handle
    return email.match(emailRegex) !== null;

}

export default function Register() {
    // sign in with google, OR sign in with credentials
    const [userForm, setRegisterForm] = React.useState({
        email: "",
        password: ""
    });
    console.log("render");
    
    const [passwordValid, setPasswordValid] = React.useState(null);
    const [emailInfo, setEmailInfo] = React.useState(null);
    
    async function checkEmailUsed(email) {
        // ajax call
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 300);
        });
        console.log(email);
        if (email === "eq@eq")
            setEmailInfo("This email is already in use.");
        else
            setEmailInfo("");
    }

    const debouncedCheckEmail = React.useMemo(() => debounce(checkEmailUsed, 500), []);

    function changeEmail(e) {
        e.preventDefault();
        setRegisterForm({...userForm, email: e.target.value});
        let valid = validateEmail(e.target.value);
        console.log(e.target.value, valid);
        if (valid) {
            setEmailInfo("");
            debouncedCheckEmail(e.target.value);
        }
        else
            setEmailInfo("Please enter a valid email.");
    }

    function changePassword(e) {
        e.preventDefault();
        setRegisterForm({...userForm, password: e.target.value});
        let valid = validatePassword(e.target.value);
        setPasswordValid(valid);
    }

    return (
        <Form>
            <Form.Group controlId="login-email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={userForm.email} onChange={changeEmail}></Form.Control>
                <Form.Text>{emailInfo}</Form.Text>
            </Form.Group>
            <Form.Group controlId="login-password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={userForm.password} onChange={changePassword}></Form.Control>
                {
                    !passwordValid ?
                    <Form.Text>Please enter a password with a minimum of 8 characters, one letter, one number, and one special character.</Form.Text> :
                    null
                }
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign up
            </Button>
        </Form>
    );
}