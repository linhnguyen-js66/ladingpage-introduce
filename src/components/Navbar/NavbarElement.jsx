import { Nav, NavBtn, NavBtnLink, NavLink, NavMenu, Bars } from './index'
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={require('../../assets/logo1.png')}
                        alt="logo"
                        className="logo-navbar-img"
                        width="50px"
                        height="50px"
                    />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/introduce" activeStyle>
                        I'm Linh
                    </NavLink>
                    <NavLink to="/project" >
                        Project
                    </NavLink>
                    <NavLink to="/award" >
                        Awards
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/contact" >
                            Contact me
                        </NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar