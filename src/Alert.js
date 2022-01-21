
import { useEffect } from "react";

const Alert = ({ msg, clr,removeAlert,list }) => {

    //to make the alert disappear after 2s
    useEffect(() => {
        const setTimer = setTimeout(() => {
            removeAlert();
        }, 2000);

        return () => clearTimeout(setTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);

    return (
        <h1 className={`alert ${clr}`}>{msg}</h1>
    );
}

export default Alert;