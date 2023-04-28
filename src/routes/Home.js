import Directory from "../components/directory/Directory";
import './styles/home.scss'

const Home = () => {
    const categories = [
        // {
        //     id: 1,
        //     title: 'tea',
        //     imageUrl: 'https://source.unsplash.com/m-gqDRzbJLQ',
        //     alt: 'Photo by Content Pixie on Unsplash'
        // },
        // {
        //     id: 2,
        //     title: 'flowers',
        //     imageUrl: 'https://source.unsplash.com/69pv5wTBW20',
        //     alt: 'Photo by jon bagnato on Unsplash'
        // },
        {
            id: 3,
            title: 'coffee',
            imageUrl: 'https://source.unsplash.com/cEJwMalRit8',
            alt: 'Photo by Nathan Dumlao on Unsplash'
        },
        // {
        //     id: 4,
        //     title: 'cozy drinks',
        //     imageUrl: 'https://source.unsplash.com/XUoDYDfdTGg',
        //     alt: 'Photo by Tracey Hocking on Unsplash'
        // },
        {
            id: 5,
            title: 'plants',
            imageUrl: 'https://source.unsplash.com/s5-NmxNA-7c',
            alt: 'Photo by Brina Blum on Unsplash'
        },
    ];

    return (
        <section className='home'>
            <div className='home__content'>
                <h1>Welcome to Cozy</h1>
                <h3>Shop our variety of sustainable coffee and plants for some coziness!</h3>
            </div>
            <Directory categories={categories} />
        </section>
    );
};

export default Home;