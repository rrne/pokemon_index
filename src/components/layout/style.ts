import styled from "styled-components";

export const TopHeader = styled.header`
    width: 100%;
    height: 70px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    justify-content: space-between;
    .title-box{
        display: flex;
        align-items: center;
        gap: 10px;
        img{
            height: 100%;
        }
        .title{
            font-weight: 600;
            font-size: 20px;
        }
    }

    .search-box{
        display:flex;
        align-items: center;
        gap: 10px;
        width: 40%;
        .search{
            flex:1;
            display: flex;
            align-items: center;
            gap: 10px;
            border-radius: 20px;
            border: 1px solid #ccc;
            padding: 8px 16px;
            input{
                flex:1;
                border: none;
                outline: none;
                font-size: 16px;
                color: #333;
            }
            .icon{
                color: #777;
                cursor: pointer;
                transition: 0.2s;
                &:hover{
                    color: #444;
                }
            }
        }
        .list-btn{
            padding: 6px 24px;
            border: 1px solid #ddd;
            border-radius: 20px;
            background: #fff;
            font-weight: 600;
            color: #555;
            cursor: pointer;
            transition: 0.2s;
            &:hover{
                background: #ddd;
                color: black;
            }
        }
    }
`