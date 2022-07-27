import React from "react";

const ShowIncrement = React.memo(({ increment }) => {

    console.log('Me volví a generar 😑');


    return (
        <button
            className='btn btn-primary'
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
})

export default ShowIncrement;