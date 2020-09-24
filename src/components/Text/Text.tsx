import React from "react"

interface Text{
    description: string
}

const Text = ({description }: Text) => {
    return (
        <p> {description} </p>
    )
}

export {Text}