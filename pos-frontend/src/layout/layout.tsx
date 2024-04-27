import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SIdeBar";
import styled from "styled-components";
import { devices } from "../components/styled/responisve.styled";

const DashboardLoayout = styled.div`
    margin-right: 0;
    margin-top: 70px;
    @media ${devices.tablet} {
        margin-right: 250px;
    }
    @media ${devices.laptop} {
        margin-right: 250px;
    }
    @media ${devices.laptopL} {
        margin-right: 250px;
    }
    @media ${devices.desktop} {
        margin-right: 250px;
    }
`;

function Layout() {
    return (
        <>
            <SideBar />
            <DashboardLoayout>
                <Outlet />
            </DashboardLoayout>
        </>
    );
}

export default Layout;
