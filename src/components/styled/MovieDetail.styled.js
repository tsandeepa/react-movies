import styled from "styled-components";

export const MovieInfo = styled.div`

        
    .md-loading{
        /* position: absolute; */
        z-index: 10;
        width: 100%;
        background:#ccc;
    }

    .bd-fade{
        .bf-overlay{
            position: fixed;
            /* background:#0000006e; */

            /* background: rgb(20,2,31); */
            /* background: linear-gradient(0deg, rgba(20,2,31,1) 0%, rgba(113,113,113,1) 100%); */
            /* background: linear-gradient(0deg,rgb(77 77 77 / 0%) 0%, rgb(0 0 0) 100%); */
            background: linear-gradient(0deg,rgb(77 77 77 / 68%) 0%,rgb(0 0 0) 100%);

            top: 0;
            bottom: 0;
            width: 100%;
            z-index: 1;
            backdrop-filter: blur(15px);
            
            
        }

        

        position:absolute;
        width: 100%;
        img{
            width: 100%;
            position: fixed;
            left: 0;
            z-index: 0;
            animation: rotate 40s linear infinite alternate-reverse;
        }
        @keyframes rotate {
				from {
					transform: scale(1);
				}

				to {
					transform: scale(2);
				}
			}
        }



    .md-container{
        max-width: 1100px;
        margin: 0 auto;
        display: flex;
        position: relative;
        z-index: 1;
        padding-top: 30px;
        gap: 30px;
        .mi-poster{
            box-shadow: 0px 24px 120px #000000a6;
        }
        .md-right-info{
            flex: 1;
            text-align: left;
            .btn-mi-close{
                position: fixed;
                left:15px;
                top: 95px;
                z-index:5;
                width: 35px;
                height: 35px;
                border: none;
                border-radius: 40px;
                cursor: pointer;
            }
            .user-rate{
                span{
                    color: #efcc4cab;
                    margin-right: 10px;
                }
                label{

                }
            }
            .mv-title{
                font-size: 38px;
                margin-bottom: 5px;
            }
            .mv-date{
                font-weight: 400;
            }
            .mi-desc{
                font-size: 16px;
                line-height: 1.6;
                font-weight: 300;
                font-family: 'Roboto', sans-serif;
                
            }
        }
    }
    @media only screen and (max-width: 690px){
        .md-container{
            display: block;
                .md-poster{
                    .mi-poster{
                        width: 67% !important;

                    }
                }
                .md-right-info{
                    padding: 12px;
                    .btn-mi-close{
                        top: 125px;
                    }
                }
        }

    }
    
`