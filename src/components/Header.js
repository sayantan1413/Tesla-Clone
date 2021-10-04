import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector} from 'react-redux';
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)

    return (
        <Container>
            <a>
                <img src="./images/logo.svg" alt="" />
            </a>
            <Menu>
            <li><a href="#">Model S</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Model A</a></li>
                <li><a href="#">Model B</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panel</a></li>
                <div className="animation"></div>
            </Menu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => 
                    <li key={index}><a href="#">{car}</a></li>
                )} 
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`;

const Menu = styled.div`
    @media(max-width: 768px) {
        display: none;
    }

    .animation{
        width: 100px;
        position: absolute;
        top: 12px;
        z-index: -100;
        height: 35px;
        transition: all .5s ease 0s;
        border-radius: 12px;
    }
    
        li{
            list-style: none;
            display: inline-block;
            padding: 8px;
            border-radius: 12px;
            cursor: pointer;
            position: relative;
    
            &:nth-child(1):hover~.animation{
                left: 21rem;
                background-color: rgb(0,0,0,0.1);
        }    
            
            &:nth-child(2):hover~.animation{
                left: 27rem;
                    background-color: rgb(0,0,0,0.1);
                }
    
            &:nth-child(3):hover~.animation{
                left: 33rem;
                    background-color: rgb(0,0,0,0.1);
                }
    
            &:nth-child(4):hover~.animation{
                left: 39.3rem;
                    background-color: rgb(0,0,0,0.1);
                }
    
            &:nth-child(5):hover~.animation{
                left: 46rem;
                background-color: rgb(0,0,0,0.1);
                }
            
            &:nth-child(6):hover~.animation{
                width: 110px;
                left: 53rem;
                background-color: rgb(0,0,0,0.1);
                }
        }

     a {
        font-weight: 600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }
`;

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
        font-weight: 600;
        margin-right: 10px;
    }
    
    @media(max-width: 460px) {
        font-size: 15px;
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a{
            font-weight: 600;
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;