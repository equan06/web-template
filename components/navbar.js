import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "react-bootstrap/Button";

const dropdownItems = [
    { href: "/a", text: "Page A"},
    { href: "/b", text: "Page B"}
];

export default function NavBar() {
    const { data: session } = useSession();
    return (
        <>
            <Navbar bg="light" expand="sm">
                <Container>
                    <Navbar.Brand href="/calendar">Run Calendar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <LoginButton session={session}></LoginButton>
                            <SignUpButton session={session}></SignUpButton>
                            <Dropdown items={dropdownItems}></Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}


function Dropdown({items}) {
    return (
        <NavDropdown 
            title={
                (<Image 
                    src="/settings.svg"
                    width={30}
                    height={30}
                    alt="settings-icon"
                ></Image>)
            } 
            id="basic-nav-dropdown">
            {
                items.map(item => 
                    <NavDropdown.Item key={item.text} href={item.href}>{item.text}</NavDropdown.Item>
                )
            }
        </NavDropdown>
    );
}



function LoginButton({session}) {
    if (session) {
        return <Button variant="primary" onClick={() => signOut()}>Log out</Button>;
    }
    else {
        return <Button variant="primary" onClick={() => signIn()}>Log in</Button>;
    }
}

function SignUpButton({session}) {
    if (!session) {
        return <Button variant="primary" onClick={() => register()}>Sign up</Button>;
    }
    return;
}