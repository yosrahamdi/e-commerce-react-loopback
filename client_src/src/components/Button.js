import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainWhite);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 05rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s easr-in-out;
&: hover{
    background: var(--lightBlue);
    color: var(--LightBlue);
}
&: focus {
    outline: none;
}
`;