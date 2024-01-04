import { Link } from 'react-router-dom';
import "./products.css";
import { pets } from '../../List/pets';


function Products() {
    return (
        <section className='section-adopt'>
            <div className="container">
                <h2 className='title-adopt'>Adoption</h2>
                <div className='container-icons'>
                    {pets?.map(item => (
                        <div className='box-icon'>
                            <div key={item.id} className='icon' >
                                <div className='icon-image'>
                                    <img src={item.image} />
                                </div>
                                <div className='box-icon-content'>
                                    <h4 className='icon-title'>{item.name}</h4>
                                    <p><strong>Age:</strong> {item.age}</p>
                                    <p><strong>Gender:</strong> {item.gender}</p>
                                    <p><strong>Breed:</strong>{item.breed}</p>
                                </div>                                
                            </div>
                            <div className='btn-container'>
                                <Link className='btn-pink' to="/adoption">Details</Link>
                                <a className='btn-blue' href="">Adopt</a>
                            </div>                       
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
export default Products;