const Button = ({ text, color, type, onClick }) => {
    return (
        <button onClick={onClick} type={type} className={`btn ${color}`}>
            {text}
        </button>
    );
};

export default Button;
