import { useFetch } from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter";

const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter();

    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/' + counter);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                isLoading
                    ? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-1'>{quote}</p>
                            <footer className='blockquote-footer'>{author} </footer>
                        </blockquote>
                    )
            }

            <button onClick={() => increment(1)} className='btn btn-primary'>
                Next quote
            </button>

        </>
    )
}

export default MultipleCustomHooks;