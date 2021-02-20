import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    box-shadow: 5px 5px 5px #aaaaaa;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    height: 40px;
    margin-top: 15px;
    text-transform: uppercase; 
    width: 283px; 

    :disabled {
        background-color: ${({ theme }) => theme.colors.disable};
        border: 1px  ${({ theme }) => theme.colors.disable};
        cursor: default;
    }    

`;

export default Button;
