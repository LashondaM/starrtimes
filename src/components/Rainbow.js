import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    // multiply it by 5, so it gives us a random number between 0 and 5
    // Math.floor rounds numbers to the next whole number
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const oreo = randomColor + '-text';

    return (props) => {
        return (
            <div className={oreo}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}

export default Rainbow