
export const Error = ({ inputError }) => {
    if (!inputError) {
        return;
    }
    return (
        <span className="error">{inputError.message}</span>
    )
}
