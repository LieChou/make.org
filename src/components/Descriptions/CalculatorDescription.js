import React from 'react';

export const CalculatorDescription = () => (
    <>
        <hr className="app-separator " />
        <h2 className="app-exercise-title">Calculator Exercise</h2>
        <h3>Context :</h3>
        <p>This exercise is here to test your development logic and your skills in React JS.</p>
        <h3>Expected :</h3>
        <p>You have two fields and 4 buttons. Each field can be filled with numbers.</p>
        <p>The wording of each button describe what it has to do. You must code the function and attach it to the right event and button.</p>
        <p>4 functions are expected :</p>
        <ul>
            <li>add()</li>
            <li>substract()</li>
            <li>multiply()</li>
            <li>divide()</li>
        </ul>
        <p>ES6 arrow functions are prefered</p>
    </>
)