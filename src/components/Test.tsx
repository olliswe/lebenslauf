import React, {useEffect} from 'react';
import useToastMessages from "../hooks/useToastMessages";

const Test = () => {

    const {info} = useToastMessages()


    return (
        <div>
            Hello world!
        </div>
    );
};

export default Test;
