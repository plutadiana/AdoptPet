import "./details.css";
import { useEffect, useState } from "react";
import { pets } from "../List/pets";
import { useParams } from "react-router-dom";
import { IoPaw } from "react-icons/io5";

function Details() {
    const { id } = useParams();
    const [pet, setPet] = useState({});
    // Fetch pet data when component mounts
    useEffect(() => {
        let pet = pets[0];
        for (let i = 1; i < pets.length; i++) {
            if (pets[i].id === parseInt(id)) {
                pet = pets[i];
            }
        };
        setPet(pet);
    }, []);

    return (
        <>
            <div className="banner-adoption">
                <div className="container">
                    <h1 className="text-center">Details</h1>
                </div>
            </div>
            <section className="details-section">
                <div className="container">
                    <div className="card-details">
                        <div className="img-card">
                            <img src={pet.image} alt={pet.name} />
                        </div>
                        <div className="card-content">
                            <h2 className="title-card">{pet.name}</h2>
                            <ul className="list-card">
                                <li><IoPaw /><strong>Gender:</strong>{pet.gender}</li>
                                <li><IoPaw /><strong>Age:</strong>{pet.age} years</li>
                                <li><IoPaw /><strong>Weight:</strong>{pet.weight} kg</li>
                                <li><IoPaw /><strong>Breed:</strong>{pet.breed}</li>
                                <li><IoPaw /><strong>Vaccinated:</strong>{pet.vaccinated === "true" ? "Yes" : "No"}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="content-description">
                        <h3>About me</h3>
                        <p>{pet.description}</p>
                        <a className='btn-pink' href="">Adopt Me</a>
                    </div>
                </div>

            </section>
        </>


    )
}

export default Details;