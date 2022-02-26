import styled from "styled-components";

export const Nav = styled.div`

    /* background: #cfc; */
    background: ${({theme})=> theme.bg};
     color: ${({theme})=> theme.color};

     background:${({theme})=> theme.navBg};
    backdrop-filter: blur(17px);

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        position: sticky;
        top: 0;
        z-index: 2;
        .tp-left{
            display: flex;
            align-items: center;
            gap: 20px;
            h1{margin:0}
        }
        .tp-right{
            display: flex;
            gap: 20px;
            align-items: center;
            input{
                border: none;
                padding: 10px 22px;
                border-radius: 50px;
            }
            a{
                color: ${({theme})=> theme.color};
                text-decoration: none;
            }
            .btn-darkLight{
                width: 40px;
                height: 40px;
                border-radius: 50px;
                border: none;
                cursor: pointer;
                font-size: 22px;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;

            }
        }

        .sch-scroll{
            margin: 0 auto;
            text-align: left;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin: 0 auto;
            padding: 10px;
            a{   
                text-decoration: none;
                /* background: #181818; */
                .sch-mli{
                    display: flex;
                    gap: 20px;
                    align-items: center;
                    padding: 4px 20px 4px 4px;
                    p{
                        color: #fff;
                        margin-bottom: 5px;
                        font-size: 17px;
                    }
                    label{
                        color: #8bafbd;
                        font-size: 16px;
                    }
                    img{
                        width: 70px;
                        border-radius: 4px;
                    }
                }
                
            }
        }

`