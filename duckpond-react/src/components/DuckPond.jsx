import ducksInThePond from '../ducks';
import DuckCard from './DuckCard';

const DuckPond = () => {
    return (
        <section
            id='pond'
            className='flex justify-center flex-wrap gap-4 p-4 w-full'
        >
            {ducksInThePond.map((duck) => (
                <DuckCard
                    key={duck.id}
                    // quote={duck.quote}
                    // imgUrl={duck.imgUrl}
                    // name={duck.name}
                    // {...duck}
                    duck={duck}
                />
            ))}
        </section>
    );
};

export default DuckPond;
