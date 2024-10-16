import Button from './Button';

const Header = () => {
    return (
        <header className='text-center'>
            <h1 className='text-6xl mb-4'>The Duck Pond</h1>
            <Button
                text='Motivate me!'
                color='btn-primary'
                type='button'
                onClick={() => alert('You got this!')}
            />
        </header>
    );
};

export default Header;
