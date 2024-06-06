import { useNavigate } from "react-router-dom";

function Home() {
    const router = useNavigate();
    return (
    <div><h1>Home</h1>
        <button onClick={() => router("/use-navigate")}>Go to navigatepage</button>
    </div>
    )
}

export default Home;