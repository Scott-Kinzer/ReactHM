export const errorHandler = (e, setStatusError) => {
    setStatusError(e.response.status);
            setTimeout(() => {
                setStatusError(false);
            }, 2000);
}