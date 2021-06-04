

export const Urlservices = () => {
    if (process.env.NODE_ENV === "development") {
        return process.env.REACT_APP_URL;
    } else {
        return process.env.REACT_APP_PROD_URL;
    }
}