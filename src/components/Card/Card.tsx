import React from "react"

interface Card{
    title: string
    description: string
}

const Card = ({title, description }: Card) => {
    const handleClick = ()=> console.log("click on card button")
    return (
        <div>
            <h1>{title}</h1>
            <p> {description} </p>
            <button onClick={handleClick} >click</button>
        </div>
    )
}

export {Card}