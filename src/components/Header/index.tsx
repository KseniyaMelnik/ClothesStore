import React from "react";
import {Navigation, Wrapper, Actions} from "./styles";
import {ReactComponent as Logo} from "../../assets/brand_icon.svg";
import Currency from "../Currency";
import CartIcon from "../CartIcon";


class Header extends React.Component {
    render() {
        return <Wrapper>
            <Navigation >
                <div>women</div>
                <div>men</div>
                <div>kids</div>
            </Navigation>
            <Logo />
            <Actions>
                <Currency />
                <CartIcon />
            </Actions>
        </Wrapper>;
    }
}

export default Header