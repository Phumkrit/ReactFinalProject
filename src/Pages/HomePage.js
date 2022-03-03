import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook'
import YoutubeIcon from '@material-ui/icons/YouTube'
import GitHubIcon from '@material-ui/icons/GitHub'

const HomePage = () => {
  return (
    <HomePageStyled>
        <div className='typography'>
            <h1>
                Hello I'm  <span>Phumkrit Supkvanich</span> </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                <div className='icons'>
                    <div className='icon i-facebook'><FacebookIcon/></div>
                    <div className='icon i-gitHubIcon'><GitHubIcon/></div>
                    <div className='icon i-youtube'><YoutubeIcon/></div>
                </div>
            
        </div>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;


export default HomePage