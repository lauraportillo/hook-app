//React
import { useFetch, useCounter } from "../hooks"
//Components
import LoadingQuote from "./LoadingQuote";
import Quote from "./Quote";


const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {isLoading ? (<LoadingQuote />) : (<Quote quote={quote} author={author} />)}

            <button
                onClick={() => increment(1)}
                disabled={isLoading}
                className='btn btn-primary'>
                Next quote
            </button>

        </>
    )
}

export default MultipleCustomHooks;