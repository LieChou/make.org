import React from 'react';

export const CollapseDescription = () => (
    <>
        <hr className="app-separator " />
        <h2 className="app-exercise-title">Collapse Exercise</h2>
        <h3 className="app-exercise-subtitle">Context :</h3>
        <p>This exercise is here to test your skills in React JS, HTML and CSS.</p>
        <h3 className="app-exercise-subtitle">Expected :</h3>
        <p>You will find below a component designed in Figma. You have to code it in {`<Collapse />`} Component</p>
        <p>
            To help you, you will find :
        </p>
        <ul>
            <li>the mockup of the collapse component, </li>
            <li>a prototype describing the 2 states expected (collapsed and expanded)</li>
        </ul>
        <p>Click on the "Collapse Element" link at the bottom of the mockup to open figma, and find styles</p>
        <p>The protoype describes the interactions and expected states: collapsed and expanded</p>
        <h3 className="app-subtitle">Mockup :</h3>
        <iframe
            title="mockup"
            style={{ border: 'none' }}
            width="640"
            height="350"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FGQaDkw5Ptfqy8QNpn8Bbwn%2FCollapse-Element%3Fnode-id%3D0%253A1"
            allowFullScreen>
        </iframe>
        <h3 className="app-subtitle">Prototype :</h3>
        <iframe
            title="prototype"
            style={{ border: 'none' }}
            width="640" height="250"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGQaDkw5Ptfqy8QNpn8Bbwn%2FCollapse-Element%3Fnode-id%3D5%253A36%26scaling%3Dmin-zoom"
            allowFullScreen>
        </iframe>
        <p>You can code the collapse component below :</p>
    </>
)