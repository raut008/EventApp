import React from 'react'

export const Banner = () => {
    return (
        <header style={{
            backgroundImage: `url(
            "https://arkansasconsumer.org/wp-content/uploads/2015/09/Organize-A-Successful-Event.jpg"
            )`,
            color: "#000",
            fontWeight: "800",
        }} >
            <div style={{ fontColor: "white" }}>
                <h1 className="display-4">Hello, world!</h1>
                <h5 className="lead">This is a simple Event App</h5>
                <hr className="my-4" />
                <p>Go Check it out</p>
            </div>
        </header >
    )
}
