import { useState } from "react";

const Show = () => {
    const [show , setShow] = useState(true);

    return (
        <div className="show-container">
            <button id="show" onClick={()=> setShow((show) => !show)}>Show/Hide</button>
            {show && <h1>content to be shown or hidden</h1> }

            {/* {show && <> <h1>content to be shown or hidden</h1>  <Timer /> <Todo /> </>} */}
        </div>
    )
}

export default Show
