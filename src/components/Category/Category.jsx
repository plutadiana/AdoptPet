import { Link } from "react-router-dom";
import "./category.css";
import Dogs from  "../../assets/dogs.png"
import Cats from  "../../assets/cats.png"

function Category() {
    return (
        <section className="category-section">
            <div className="container">
                <h2 className="title-category title-adopt">Category Adopt</h2>
                <div className="content-category">
                    <Link to="/adoption/dogs">
                        <img src={Dogs} alt="Dogs" />
                    </Link>
                    <Link to="/adoption/cats">
                    <img src={Cats} alt="Cats" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Category;