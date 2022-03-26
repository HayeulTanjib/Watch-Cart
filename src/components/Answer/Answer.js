import React from 'react';
import './Answer.css';

const Answer = () => {
    return (
        <div className='ansText'>
            <h3 className='mt-5'>How React works?</h3>
            <p className='text-left '>
                1. React has its own DOM. Its call virtual DOM. <br />
                2. Whenever any changes happen React update on browser dom according to virtual dom. <br />
                3. React use diff algorithm to make change virtual dom to browser dom. <br />
                4. React uses JSX which is syntactic sugar. <br />
                5. React takes our JSX and then truns it into JS representation.
            </p>

            <h3>How useState works?</h3>
            <p>
                1. useState is a react Hook which we can use in functional component in react. <br />
                2. useState returns two parameter one is stateful value and another is function. <br />
                3. fuction parameter is responsible to update stateful value. <br />
                4. It is generates a single state associated with that component. <br />
                5. useState takes initial value of the state variable as an argument.
            </p>
        </div>
    );
};

export default Answer;