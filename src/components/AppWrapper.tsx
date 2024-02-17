"use client";
import React, { type FunctionComponent, HTMLAttributes } from "react";
import { Link, Button } from "@nextui-org/react";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from "@nextui-org/react";

interface AppWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export const AppWrapper: FunctionComponent<AppWrapperProps> = ({
	children,
}) => {
	return (
		<div className="w-full h-full">
			<Navbar>
				<Navbar>
					<NavbarBrand>
						<p className="font-bold text-inherit"> Shameful.ly</p>
					</NavbarBrand>
					<NavbarContent className="hidden sm:flex gap-4" justify="center">
						<NavbarItem>
							<Link color="foreground" href="#">
								Home
							</Link>
						</NavbarItem>
						<NavbarItem isActive>
							<Link href="#" aria-current="page">
								Friends
							</Link>
						</NavbarItem>
					</NavbarContent>
					<NavbarContent justify="end">
						<NavbarItem>
							<Button as={Link} color="primary" href="#" variant="flat">
								Get Started
							</Button>
						</NavbarItem>
					</NavbarContent>
				</Navbar>
			</Navbar>

			{children}
		</div>
	);
};
