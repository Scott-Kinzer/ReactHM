import React from 'react';
import { Link } from 'react-router-dom';

const ButtonWrapper = ({pages}) => {


    if (pages.next && pages.prev) {
        const prevId = pages.prev[pages.prev.length - 1];
        const nextId = pages.next[pages.next.length - 1];

        return (
            <>  
                <Link to={`/episodes/${prevId}`} > PREV </Link>
                <Link to={`/episodes/${nextId}`} > NEXT </Link>
            </>

        )
    }


    if (!pages.next && pages.prev) {
        const prevId = pages.prev[pages.prev.length - 1];
      

        return (
            <>  
                <Link to={`/episodes/${prevId}`} > PREV </Link>
                <Link className='disabled-link' to={`/episodes`} > NEXT </Link>
            </>

        )
    }
    
    const nextId = Array.isArray(pages) ?  '' : pages.next[pages.next.length - 1];
    return (
        <>  
            <Link className='disabled-link'  to={`/episodes/`} > PREV </Link>
            <Link  to={`/episodes/${nextId}`} > NEXT </Link>
        </>

    )
};

export default ButtonWrapper;