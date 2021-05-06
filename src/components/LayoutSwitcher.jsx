import React, { useState } from 'react'


const LayoutSwitcher = () => {

    const vals = ['layout1', 'layout2'];


    const state = useState(0);
    const layout = state[0];
    const setLayout = state[1];
    // Could use array destructing to save space
    //const [layout, setLayout] = useState(0);  

    const switchLayout = () => {
        if (layout === 0) {
            setLayout(1);
        } else {
            setLayout(0);
        }
    }
    let style;

    return (
        //Ternary vs if else(if else needs to be inside anon func)  - Both versions will work
        // <div>
        //     {(layout === 0)?
        //         <button onClick={() => switchLayout()} style={{color:'blue'}} >Click me</button>
        //     :
        //         <button onClick={() => switchLayout()} style={{color:'red'}} >Click me</button> 
        //     }
        // </div>

        <div>
            {(() => {
                if (layout === 0) {
                    return (<button onClick={() => switchLayout()} style={{ color: 'blue' }} >Click me</button>)
                } else {
                    return (<button onClick={() => switchLayout()} style={{ color: 'red' }} >Click me</button>)
                }
            }
            )()}
        </div>
    )
}

export default LayoutSwitcher;