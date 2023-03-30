import { OurUniqueFeatures } from '../OurUniqueFeatures'

export const Home = () => {
    return (
        <div className="wrapper">
            {/* not sure if i should use h1, h2, or h3 here */}
            <h3>Our Most Popular Board category</h3>
            <div className="filters">
                <p>All</p>
                <p>Ski</p>
                <p>Boards</p>
                <p>Other</p>
            </div>


            <OurUniqueFeatures />

            <div className="products">
                <div className="product"></div>
            </div>
        </div>
    )
}