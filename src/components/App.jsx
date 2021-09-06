import "../styles/index.scss"
import Introduce from "./Introduce"
import Heart from "../assets/heart.png"
const App = () => {
    return (
        <>
            <section className="main"></section>
            <main>
                <section>
                    <h1>Hello Im Linh</h1>
                </section>
                <img src={Heart} alt="break-heart" width="150"/>
                <Introduce/>
            </main>
        </>
    )
}
export default App