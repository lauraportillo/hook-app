//React
import { useEffect } from "react";

const Message = () => {

    useEffect(() => {
        console.log('Message Mounted');

        return () => {
            console.log('Message UnMounted');
        }
    }, [])



    return (
        <>
            <h3>User already exists</h3>
        </>
    )
}

export default Message;