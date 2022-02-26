import styled from "styled-components";

export const ListLoader = styled.div`
    .mv-loader{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
        gap: 15px;
        padding: 0px 15px;
        .mvl-grid{
            min-height: 458px;
            
            background: linear-gradient(320deg, rgba(113,113,113,0) 0%, rgba(0,0,0,1) 100%);

            animation: skeletonLoading 1s linear infinite alternate-reverse;
        }
    }

    @keyframes skeletonLoading {
        0%{
            opacity: 0.2;

        }
        100%{
            opacity: 0.5;
        }
    }

`