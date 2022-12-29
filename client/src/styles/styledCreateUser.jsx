import styled from "styled-components"

export const CreateUserContainer = styled.div.attrs({className: "create-user-container"})`
    min-width: 220px;
    max-width: 500px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
`

export const CreateUserForm = styled.form.attrs({className: "create-user-form"})`
    display: flex;
    flex-direction: column;
`

export const CreateUserInput = styled.input.attrs({className: "create-user-input"})`

`