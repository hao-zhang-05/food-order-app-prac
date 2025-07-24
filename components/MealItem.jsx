import { currencyFormatter } from "../util/formatting";

export default function MealItem({ meal }) {
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">
                        {currencyFormatter.format(meal.price)}
                    </p>
                    <p className="meal-item-description">{meal.discription}</p>
                </div>
                <p className="meal-item-actions">
                    <button>添加</button>
                </p>
            </article>
        </li>
    )
}