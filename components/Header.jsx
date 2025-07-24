import logo from '../assets/logo.jpg'

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>
                <h1>老爹快餐店</h1>
            </div>
            <nav>
                <button>已选</button>　　　　　　　　
            </nav>
        </header>
    );
}