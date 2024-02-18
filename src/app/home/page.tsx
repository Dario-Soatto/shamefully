"use client";

import React, { type FunctionComponent, useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { generateClient } from "aws-amplify/api";
import { createGoal, createUser } from "@/graphql/mutations";
import { CreateGoalInput, CreateUserInput } from "@/API";
import { motion } from "framer-motion";

const client = generateClient();

interface HomePageProps {}

export const HomePage: FunctionComponent<HomePageProps> = () => {
	return (
		<div className="w-full h-full flex flex-col justify-start pt-20 items-center gap-20">
			{/* <button
				onClick={() => {
					client
						.graphql({
							query: createUser,
							variables: {
								input: {
									firstName: "Elon",
									lastName: "Musk",
									email: "akaharao@gmail.com",
									id: "demo",
								} satisfies CreateUserInput,
							},
						})
						.then((res) => {
							console.log(res);
						});
				}}
			>
				Create user
			</button> */}
			<AddGoal />
			<AddShamers />
		</div>
	);
};

export default HomePage;

const AddGoal = ({}) => {
	const [goalInputForm, setGoalInputForm] = useState<CreateGoalInput>({});
	const [allowShaming, setAllowShaming] = useState(false);

	return (
		<motion.form
			className="w-5/6 h-fit rounded-lg p-5 gap-5 m-5 bg-white outline-zinc-200 outline  flex justify-start items-center flex-col  shadow-xl hover:shadow-lg transition-all duration-300"
			onSubmit={async (e) => {
				e.preventDefault();
				console.log("goalInputForm:", goalInputForm);
				await client
					.graphql({
						query: createGoal,
						variables: {
							input: {
								name: goalInputForm["title"],
								title: goalInputForm["title"],
								description: goalInputForm["description"],
								deadline: goalInputForm["deadline"],

								goalCreatorId: "demo",
							},
						},
					})
					.then((res) => {
						console.log(res);
					});
			}}
		>
			<div className="font-bold ">Add your goal</div>
			<Input
				label="What's your goal?"
				name="title"
				value={goalInputForm["title"] ?? ""}
				onChange={(e) => {
					setGoalInputForm({
						...goalInputForm,
						[e.target.name]: e.target.value,
					});
				}}
				classNames={{
					label: "text-black/50 dark:text-white/90 w-96",
					mainWrapper: ["w-full", "gap-2 bg-white"],
					input: [
						"bg-transparent",

						"text-black/90 dark:text-white/90",
						"placeholder:text-default-700/50 dark:placeholder:text-white/60",
					],
					innerWrapper: ["bg-transparent", "w-full"],
					inputWrapper: [
						"shadow-xl",
						"w-full",
						"bg-default-200/50",
						"dark:bg-default/60",
						"backdrop-blur-xl",
						"backdrop-saturate-200",
						"hover:bg-default-200/70",
						"dark:hover:bg-default/70",
						"group-data-[focused=true]:bg-default-200/50",
						"dark:group-data-[focused=true]:bg-default/60",
						"!cursor-text",
					],
				}}
				type="text"
				className="w-full bg-white"
			/>

			<Textarea
				label="Enter a description"
				name="description"
				value={goalInputForm["description"] ?? ""}
				onChange={(e) => {
					setGoalInputForm({
						...goalInputForm,
						[e.target.name]: e.target.value,
					});
				}}
				classNames={{
					label: "text-black/50 dark:text-white/90 w-96",
					mainWrapper: ["w-full", "gap-2"],
					input: [
						"bg-transparent",

						"text-black/90 dark:text-white/90",
						"placeholder:text-default-700/50 dark:placeholder:text-white/60",
					],
					innerWrapper: ["bg-transparent", "w-full"],
					inputWrapper: [
						"shadow-xl",
						"w-full",
						"bg-default-200/50",
						"dark:bg-default/60",
						"backdrop-blur-xl",
						"backdrop-saturate-200",
						"hover:bg-default-200/70",
						"dark:hover:bg-default/70",
						"group-data-[focused=true]:bg-default-200/50",
						"dark:group-data-[focused=true]:bg-default/60",
						"!cursor-text",
					],
				}}
			/>

			<div className="w-full h-fit p-2 flex mobile:flex-col gap-5 items-end">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<label className="flex flex-col gap-2 text-xs text-opacity-80 w-full">
						What's your deadline?
						<DateTimePicker
							className="bg-default-200/50 rounded-xl !outline-0 !border-0 !ring-0 w-full"
							onChange={(e: any) => {
								console.log("e:", e?.$d);

								function convertToAWSDateTime(dateString: string) {
									const date = new Date(dateString);
									return date.toISOString();
								}

								setGoalInputForm({
									...goalInputForm,
									deadline: convertToAWSDateTime(e?.$d),
								});
							}}
						/>
					</label>
				</LocalizationProvider>
			</div>
			<div className="w-1/2">
				<Checkbox
					size="lg"
					className="!text-sm"
					checked={allowShaming}
					onChange={() => {
						setAllowShaming(!allowShaming);
					}}
				>
					I agree that all shaming is with my consent and will be well deserved
					if necessary
				</Checkbox>
			</div>
			<Button
				size="lg"
				color="primary"
				type="submit"
				disabled={allowShaming}
				className="disabled:opacity-50"
			>
				I'm Ready to Be Shamed! (Create a Goal)
			</Button>
		</motion.form>
	);
};
const AddShamers = ({}) => {
	const [checkInInputForm, setCheckInInputForm] = useState<CreateGoalInput>({});

	return (
		<section className="w-5/6 h-fit rounded-lg p-5 m-5 bg-white outline-zinc-200 outline  flex justify-start items-center flex-col gap-5 shadow-xl hover:shadow-lg transition-all duration-300">
			<div className="font-bold ">Bring on the Shame</div>
			<div className="w-full h-fit p-2 flex mobile:flex-col gap-5">
				<label className="flex flex-col gap-2 text-xs text-opacity-80 w-full">
					How do you want to check in?
					<Select
						label="Select a method"
						onChange={(e) => {
							setCheckInInputForm({
								...checkInInputForm,
								[e.target.name]: e.target.value,
							});
						}}
					>
						{[
							{ label: "Take a Photo", value: "PHOTO" },
							{ label: "Send a Text", value: "TEXT" },
							{ label: "Send an Email", value: "EMAIL" },
							{ label: "Make a Phone Call", value: "PHONE_CALL" },
							{ label: "Post It", value: "SOCIAL_MEDIA_POST" },
						].map((CheckInType: any) => (
							<SelectItem key={CheckInType.value} value={CheckInType.value}>
								{CheckInType.label}
							</SelectItem>
						))}
					</Select>
				</label>
				<label className="flex flex-col gap-2 text-xs text-opacity-80 w-full">
					How do you want to check in?
					<Select label="Select a Check In Frequency">
						{[
							{ label: "Every day", value: 1 },
							{ label: "Every 2 days", value: 2 },
							{ label: "Every 3 days", value: 3 },
							{ label: "Every week", value: 7 },
							{ label: "Every 2 weeks", value: 14 },
						].map((CheckInType: any) => (
							<SelectItem key={CheckInType.value} value={CheckInType.value}>
								{CheckInType.label}
							</SelectItem>
						))}
					</Select>
				</label>
			</div>

			<Button size="lg" color="primary">
				Add Shamer
			</Button>

			<div className="w-full h-fit p-2 flex mobile:flex-col gap-5">
				<label className="flex flex-col gap-2 text-xs text-opacity-80 w-full">
					How do you want to check in?
					<Select label="Select a method">
						{[
							{ label: "Take a Photo", value: "PHOTO" },
							{ label: "Send a Text", value: "TEXT" },
							{ label: "Send an Email", value: "EMAIL" },
							{ label: "Make a Phone Call", value: "PHONE_CALL" },
							{ label: "Post It", value: "SOCIAL_MEDIA_POST" },
						].map((CheckInType: any) => (
							<SelectItem key={CheckInType.value} value={CheckInType.value}>
								{CheckInType.label}
							</SelectItem>
						))}
					</Select>
				</label>
				<label className="flex flex-col gap-2 text-xs text-opacity-80 w-full">
					How do you want to check in?
					<Select label="Select a Check In Frequency">
						{[
							{ label: "Every day", value: 1 },
							{ label: "Every 2 days", value: 2 },
							{ label: "Every 3 days", value: 3 },
							{ label: "Every week", value: 7 },
							{ label: "Every 2 weeks", value: 14 },
						].map((CheckInType: any) => (
							<SelectItem key={CheckInType.value} value={CheckInType.value}>
								{CheckInType.label}
							</SelectItem>
						))}
					</Select>
				</label>
			</div>

			<div className="w-1/2">
				<Checkbox size="lg" className="!text-sm">
					I agree that all shaming being done is with my consent and will be
					well deserved in the eventuality that it happens
				</Checkbox>
			</div>
		</section>
	);
};
