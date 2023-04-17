import Drawer from "../drawer/Drawer";
import Header from "../header/Header";
import Main from "../main/Main";

export default function App() {
    const onClickButton = () => {
        console.log(1);
    };

    return (
        <>
            <Drawer placement={"end"} name={"end"} />
            <div className="container">
                <Header />
                <Main onClickButton={onClickButton} />
            </div>
        </>
    );
}
