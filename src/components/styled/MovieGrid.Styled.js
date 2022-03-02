import styled from "styled-components";

export const ListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
    gap: 15px;
    padding: 0px 15px;

    @media only screen and (max-width: 1380px){
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

    }
    @media only screen and (max-width: 380px){
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    }

`