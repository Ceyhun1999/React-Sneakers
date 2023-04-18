import { useEffect, useState } from "react";
import Drawer from "../drawer/Drawer";
import Header from "../header/Header";
import Main from "../main/Main";

export default function App() {
    const [show, setShow] = useState(false);
    const [c, setc] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch("https://643e679ac72fda4a0bf55a22.mockapi.io/items")
            .then((res) => res)
            .then((data) => data.json())
            .then((data) => setc(data));
    }, []);

    return (
        <>
            <Drawer handleClose={handleClose} show={show} placement={"end"} name={"end"} />
            <div className="container">
                <Header handleShow={handleShow} />
                <Main />
            </div>
        </>
    );
}
