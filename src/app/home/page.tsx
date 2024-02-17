"use client";

import React, { type FunctionComponent } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";

interface HomePageProps {}

export const HomePage: FunctionComponent<HomePageProps> = () => {
	return (
		<div className="w-full h-full flex flex-col justify-start pt-20 items-center">
			<div className="w-5/6 h-fit rounded-lg p-5 m-5 bg-white outline-zinc-200 outline  flex justify-start items-center flex-col gap-5 shadow-xl hover:shadow-lg transition-all duration-300">
				<div className="font-bold ">Add your goal</div>
				<Input
					label="What's your goal?"
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
					name="task"
					className="w-full bg-white"
				/>

				<Textarea
					label="Enter a description"
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
				<div className="w-full h-fit p-2 flex mobile:flex-col gap-5 items-end">
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<label className="flex flex-col gap-2 text-xs text-opacity-80 w-full">
							What's your deadline?
							<DateTimePicker className="bg-default-200/50 rounded-xl !outline-0 !border-0 !ring-0 w-full" />
						</label>
					</LocalizationProvider>
				</div>
				<div className="w-1/2">
					<Checkbox size="lg" className="!text-sm">
						I agree that all shaming being done is with my consent and will be
						well deserved in the eventuality that it happens
					</Checkbox>
				</div>
				<Button size="lg" color="primary">
					{" "}
					I'm Ready to Be Shamed!
				</Button>
			</div>
		</div>
	);
};

export default HomePage;
