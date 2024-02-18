"use client";
import React, {
	type FunctionComponent,
	HTMLAttributes,
	useEffect,
} from "react";
import { Link, Button } from "@nextui-org/react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/react";
import { Amplify } from "aws-amplify";
import { ToastContainer } from "react-toastify";
import awsConfig from "@/aws-exports";

interface AppWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const AppWrapper: FunctionComponent<AppWrapperProps> = ({
	children,
}) => {
	useEffect(() => {
		Amplify.configure(awsConfig);
	}, []);
	return (
		<div className="w-full h-full">
			<Navbar>
				<Navbar>
					<NavbarBrand className="flex gap-5">
						<img src="/logo2.png" className="w-8" />
						<p className="font-bold text-inherit text-yellow-500">
							Shameful.ly
						</p>
					</NavbarBrand>
					<NavbarContent className="hidden sm:flex gap-4" justify="center">
						<NavbarItem>
							<Link color="foreground" href="/">
								Home
							</Link>
						</NavbarItem>
					</NavbarContent>
					<NavbarContent justify="end">
						<NavbarItem>
							<Button as={Link} color="primary" href="/goals">
								Create New Goal
							</Button>
						</NavbarItem>
					</NavbarContent>
				</Navbar>
			</Navbar>
			<ToastContainer />

			{children}
		</div>
	);
};
