import React, { useState } from "react";
import Loading from "./Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { Outlet } from 'react-router-dom';

import { Layout, Button } from "antd";
const { Header, Footer, Content } = Layout;

import Sidebar from "./Sidebar";

export const Container = ():JSX.Element => {
    const { user } = useAuth0();

    
    return (
		<Layout style={{ minHeight: '100vh' }} hasSider={true}>
			<Sidebar />
			<Layout>
				<Header
					style={{ 
						padding: 0,
						width: '100%',
						textAlign: 'center',
						color: 'white',
						boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
					}}

				>
					Hello {user.name}!
				</Header>
				<Content>
					<div style={{ padding: 24, minHeight: 360, textAlign: 'center' }}>
						<Outlet />
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Made with ❤️ At A ✨Stellantis Hackathon✨</Footer>
			</Layout>
		</Layout>
    )
};

export default withAuthenticationRequired(Container, {
    onRedirecting: () => <Loading />,
});