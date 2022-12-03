import NavBar from "./navbar";


export default function Layout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            <main>{children}</main>
        </>
    );
}