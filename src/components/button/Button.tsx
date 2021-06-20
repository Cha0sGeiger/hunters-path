interface ButtonProps {
    value: any;
    onChange?: () => void;
    color: string;
    label: string;
}


export const Button = ({onChange, color='primary', label}: ButtonProps) => {
    return(
        <button onClick={onChange} className={`button ${color}`}>
            {label}
        </button>
    )
};


