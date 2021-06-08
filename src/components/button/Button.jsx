export const Button = ({onClick, color='primary', label}) => {
    return(
        <button onClick={onClick} className={`button ${color}`}>
            {label}
        </button>
    )
};