export const Button = ({onChange, color='primary', label}) => {
    return(
        <button onClick={onChange} className={`button ${color}`}>
            {label}
        </button>
    )
};