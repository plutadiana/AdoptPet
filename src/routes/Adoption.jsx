import "./adoption.css";
import { pets } from '../List/pets';
import { Link, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/cart.context";

function Adoption() {
    const { category } = useParams();
    const cartContext = useContext(CartContext);

    const [filtredPets, setFiltredPets] = useState(pets);

    const setAllPets = () => {
        setFiltredPets([...pets]);
    };

    const setDogs = () => {
        setFiltredPets(
            pets.filter(pet => pet.category === 'dog')
        )
    };

    const setCats = () => {
        setFiltredPets(
            pets.filter(pet => pet.category === 'cat')
        )
    };

    const addToCart = (pet) => {
        cartContext.addItem(pet);
    }

    return (
        <>
            <div className="banner-adoption">
                <div className="container">
                    <h1 className="text-center">Adoption</h1>
                </div>
            </div>

            <section className="adoption-galerry">
                <div class="container">
                    <ul className="btns-category">
                        <li className="btn-pink" onClick={() => setAllPets()}>All</li>
                        <li className="btn-pink" onClick={() => setDogs()}>Dogs</li>
                        <li className="btn-pink" onClick={() => setCats()}>Cats</li>
                    </ul>
                    <div className="gallery">
                        <div className="gallery-box">
                            {filtredPets.map((item) => (
                                <div className='box-icon' key={item.id}>
                                    <div className='icon' >
                                        <div className='icon-image'>
                                            <img src={item.image} alt="{item.name}" />
                                        </div>
                                        <div className='box-icon-content'>
                                            <h4 className='icon-title'>{item.name}</h4>
                                            <p><strong>Age:</strong> {item.age}</p>
                                            <p><strong>Gender:</strong> {item.gender}</p>
                                            <p><strong>Breed:</strong>{item.breed}</p>
                                        </div>
                                    </div>
                                    <div className='btn-container'>
                                        <Link className='btn-pink' to={"/details/" + item.id}>Details</Link>
                                        <button className='btn-blue' onClick={() => addToCart(item)}>Adopt</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Adoption;