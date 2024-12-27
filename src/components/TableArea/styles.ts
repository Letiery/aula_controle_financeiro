import styled from 'styled-components';

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    font-family: sans-serif;
    margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'}; //se tiver 'props' usa ela. caso contário usa 'auto'
    padding: 10px 0;
    text-align: left;
`;