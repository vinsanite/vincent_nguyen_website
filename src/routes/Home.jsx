// Display components
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import Background from "../components/Background.jsx"
import Statefarm from "../assets/Statefarm.png"

//import "../css/homeStyle.css"

export default function Home() {
    return (
        <>
        <NavBar />
            <section className="bg-primary px-5 text-[#181818] pb-40">
                <div className="relative flex justify-center items-center m-10 flex-wrap text-left">
                    <h1 className="text-4xl font-bold mb-4 hover:bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">
                        VINCENT NGUYEN
                    </h1>
                </div>
                <div className="relative">
                    <Background />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-xs font-bold mt-32 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:scale-110 duration-200">
                            insert image here
                        </h1>
                    </div>
                </div>
            </section>
        <Footer />
        </>
    );
}

//export default Home;