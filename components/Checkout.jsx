import Modal from "../components/UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import { useContext } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form>
                <h2>结账</h2>
                <p>总计: {currencyFormatter.format(cartTotal)}</p>
                <Input label="姓名" type='text' id='full-name' />
                <Input label="邮箱" type='email' id='email' />
                <Input label="街道" type='text' id='street' />
                <div className="control-row">
                    <Input label='邮政编码' type='text' id='postal-code' />
                    <Input label='城市' type='text' id='city' />
                </div>

                <p className='modal-actions'>
                    <Button type='button' textOnly onClick={handleClose} >关闭</Button>
                    <Button>提交</Button>
                </p>
            </form>
        </Modal>
    )
}