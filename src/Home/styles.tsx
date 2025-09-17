import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    padding: 16px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.background};
`;

export const Name = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${props => props.theme.text};
`;

export const Description = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.text};
    margin-top: 12px;
    padding: 8px 20px;
    background-color: ${props => props.theme.warning};
`;
