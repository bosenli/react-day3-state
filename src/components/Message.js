import { useState } from 'react';


const Message = () => {
    const [message, setMessage] = useState("");
    // message is what holds the current state
    // setMessage is a function that changes the state
    // useState is a hook. The argument ("" in this case) defines the inital value
        // Initial value can be a string, null, true, false, an integer, an array, etc.

    return (
        <div>
            <input 
                type="text"
                value={message}
                placeholder="Enter a message" 
                onChange={ (event) =>  setMessage(event.target.value) } //changes in webpage is event
                    // onChange is an event listener that listens for change
                    // It requires a callback function
                        // event.target.value
                            // EVENT represents a change to the webpage in the input box
                                // TARGET points to the specific change
                                    // VALUE is the value that is in the input box
                    
            />

            <p>{ message }</p>
                {/* Displays the message in real time. */}

        </div>
    )
}

export default Message;