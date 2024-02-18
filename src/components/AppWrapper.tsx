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
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import {
	Authenticator,
	CheckboxField,
	TextField,
	useAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BsPlus } from "react-icons/bs";

interface AppWrapperProps
	extends HTMLAttributes<HTMLDivElement>,
		WithAuthenticatorProps {}

export const AppWrapper: FunctionComponent<AppWrapperProps> = ({
	children,
}) => {
	useEffect(() => {
		Amplify.configure(awsConfig);
	}, []);

	return (
		<Authenticator
			className="w-full h-full p-10"
			// Default to Sign Up screen
			initialState="signUp"
			// Customize `Authenticator.SignUp.FormFields`
			socialProviders={[]}
			components={{
				SignUp: {
					FormFields() {
						const { validationErrors } = useAuthenticator();

						return (
							<>
								<TextField
									label="First Name"
									name="given_name"
									placeholder="First Name"
									required
								/>
								<TextField
									label="Last Name"
									name="family_name"
									placeholder="Last Name"
									required
								/>
								{/* Re-use default `Authenticator.SignUp.FormFields` */}
								<Authenticator.SignUp.FormFields />

								{/* Append & require Terms and Conditions field to sign up  */}
								<CheckboxField
									errorMessage={validationErrors.acknowledgement as string}
									hasError={!!validationErrors.acknowledgement}
									name="acknowledgement"
									value="yes"
									label="I agree with the Terms and Conditions"
								/>
							</>
						);
					},
				},
			}}
			services={{
				async validateCustomSignUp(formData) {
					if (!formData.acknowledgement) {
						return {
							acknowledgement: "You must agree to the Terms and Conditions",
						};
					}
				},
			}}
		>
			{({ signOut, user }) => (
				<div className="w-full h-full ">
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
								<NavbarItem className="hidden md:block">
									<Button as={Link} color="primary" href="/goals">
										<span className="hidden tablet:flex">Create New Goal</span>
										<BsPlus className="" size={24} color="white" />
									</Button>
								</NavbarItem>
								<NavbarItem className="hidden md:block">
									<Button
										onClick={() => {
											signOut && signOut();
										}}
										color="secondary"
									>
										Sign Out
									</Button>
								</NavbarItem>
							</NavbarContent>
						</Navbar>
					</Navbar>
					<ToastContainer />

					{children}
				</div>
			)}
		</Authenticator>
	);
};
