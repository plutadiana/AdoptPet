import About from '../components/About/About';
import Products from '../components/Products/Products';
import Category from '../components/Category/Category';
import Contact from '../components/Contact/Contact';
import Banner from '../components/Banner/Banner';

function Home() {
    return (
        <>
            <Banner />
            <About />
            <Products />
            <Category />
            <Contact />
        </>
    )
}

export default Home;