import React from "react"
interface GenericButton {
    text: string
}

interface Button extends GenericButton {
    disabled?:boolean
    
}

export const Button = (props:Button)=> <button disabled={props.disabled}>{props.text}</button>