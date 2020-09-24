import styled from "styled-components"
import {Button} from "@material-ui/core"

export const ButtonStyled = styled(Button)<{visible:boolean}>`
    width:400px;
    && {
        background-color:purple;
        
        &:hover {
        background-color:green;
            
        }
    }
`


