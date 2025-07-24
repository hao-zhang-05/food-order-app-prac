import logo from '../assets/logo.jpg'
import Button from './UI/Button'

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="logo"/>
                <h1>老爹快餐店</h1>
            </div>
            <nav>
                <Button textOnly>已选</Button>　　　　　　　　
            </nav>
        </header>
    );
}