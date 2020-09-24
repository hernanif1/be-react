import React from "react"
import { Button } from "../Button";
import { Card } from "../Card";
import { Text } from "../Text";
import logo from './logo.svg';
interface Header{
    title: string
}
const Header= ({title}:Header) => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           <Text description="This is my description" />
           <Button text="oi" />
           <Button text="hi" disabled={true} />
           <Card title={title} description="description" />
        </header>
    )
}

export {Header}