import styled from "styled-components";

export const OneMovie = styled.div`

    /* background: #cfc; */
   background: #c1c1c108;
   
   height: 100%;
   .mv-box{
       cursor: pointer;
        /* display: flex;
        flex-direction: column; */
        /* justify-content: space-between; */
        height: 100%;
        h3{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 18px;
            text-align: left;
            margin:0;
            min-height: 44px;
            margin-top: 10px;
        }
        p{
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 15px;
            text-align: left;
            font-weight: 300;
            color: #b5b5b5;
        }
        img{
            min-height: 348px;
            object-fit: cover;
            
        }
   }

`