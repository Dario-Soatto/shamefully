"use client";

import React, { type FC, useState, useEffect, HTMLAttributes } from "react";
import Spline from "@splinetool/react-spline";
import { Input, Textarea } from "@nextui-org/react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { generateClient } from "aws-amplify/api";
import {
	createCheckIn,
	createGoal,
	createShamer,
	createUser,
} from "@/graphql/mutations";
import {
	CheckInType,
	CreateCheckInInput,
	CreateGoalInput,
	CreateShamerInput,
	type Goal,
} from "@/API";
import { motion } from "framer-motion";
import { BsX, BsPlus } from "react-icons/bs";

import { toast } from "react-toastify";

import { v4 as uuidv4 } from "uuid";
import { twMerge } from "tailwind-merge";

const client = generateClient({});

type GoalsPageProps = {
	params?: {
		id: string;
	};
	searchParams?: {
		search?: string;
	};
};

const GoalsPage: FC<GoalsPageProps> = () => {
	const [goal, setGoal] = useState<Goal>({} as Goal);
	const [finished, setFinished] = useState(false);
	const [splineLoaded, setSplineLoaded] = useState(false);

	const ref1 = React.useRef(null);
	const ref2 = React.useRef(null);
	const ref3 = React.useRef(null);
	const ref4 = React.useRef(null);

	useEffect(() => {
		if (goal.id) {
			(ref2.current as any)?.scrollIntoView({ behavior: "smooth" });
		}
	}, [goal]);

	useEffect(() => {
		if (finished) {
			(ref3.current as any)?.scrollIntoView({ behavior: "smooth" });
		}
	}, [finished]);

	useEffect(() => {
		async function getLoader() {
			const { spiral } = await import("ldrs");
			spiral.register();
		}
		getLoader();
	}, []);

	return (
		<div className="w-full h-full flex flex-col justify-start py-20 pb-40 items-center gap-20">
			{/* <img src="/logo1.png" alt="logo" className="w-1/4" /> */}

			{!splineLoaded && <l-spiral size={45} color="coral"></l-spiral>}
			<Spline
				// style={{
				// 	background:
				// 		"radial-gradient(circle, rgba(0,0,0,0.2	) 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0) 100%)",
				// }}
				className={twMerge(
					"!h-[60vh] opacity-0 transition-all  duration-300 -mt-40",
					splineLoaded && "opacity-100 -mt-0 "
				)}
				onLoad={() => {
					console.log("Spline loaded");
					setSplineLoaded(true);
				}}
				scene="https://prod.spline.design/DUCYHHZaaS0eoNm1/scene.splinecode"
			/>

			<Button
				size="lg"
				color="primary"
				onClick={() => {
					(ref1.current as any)?.scrollIntoView({ behavior: "smooth" });
				}}
			>
				Get Started
			</Button>
			{/* <Button
				onClick={() => {
					fetch("/api/send-text").then((res) => {
						console.log("res:", res);
					});
				}}
			>
				Test
			</Button> */}
			<div
				ref={ref1}
				className="w-full h-full justify-center items-center flex pt-20"
			>
				<AddGoal setGoal={setGoal} />
			</div>
			<div
				ref={ref2}
				className="w-full h-full justify-center items-center flex pt-20 "
			>
				{goal.id && <AddShamers setFinished={setFinished} goal={goal} />}
				{/* <AddShamers goal={goal} /> */}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				ref={ref3}
				className="w-full h-full justify-center items-center flex flex-col pt-20 gap-5 font-bold text-3xl"
			>
				{finished && (
					<>
						{"Let's get shaming!"}
						<motion.img
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							src="/irritated_icon.gif"
							className="rounded-full animate-in rotate-12 hover:-rotate-12 transition-all duration-300"
						/>
					</>
				)}
			</motion.div>
		</div>
	);
};

export default GoalsPage;

interface AddGoalProps extends HTMLAttributes<HTMLDivElement> {
	setGoal: React.Dispatch<React.SetStateAction<Goal>>;
}

const AddGoal = ({ setGoal }: AddGoalProps) => {
	const [goalInputForm, setGoalInputForm] = useState<CreateGoalInput>({});
	const [allowShaming, setAllowShaming] = useState(false);

	return (
		<motion.form
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			className="w-5/6 h-fit rounded-lg p-5 gap-5 m-5 bg-white outline-zinc-200 outline  flex justify-start items-center flex-col  shadow-lg hover:shadow-xl transition-all duration-300"
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
								userGoalsId: "demo",
							} satisfies CreateGoalInput,
						},
					})
					.then((res) => {
						console.log(res);
						setGoal(res.data.createGoal as Goal);
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
						Set a deadline?
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
			<div className="w-full flex justify-center items-center">
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
				disabled={!allowShaming}
				className="disabled:opacity-50 disabled:hover:opacity-50 "
			>
				Let The Shaming Begin! (Create a Goal)
			</Button>
		</motion.form>
	);
};

interface AddShamersProps extends HTMLAttributes<HTMLDivElement> {
	ref?: React.RefObject<HTMLDivElement>;
	goal: Goal;
	setFinished: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddShamers = ({ goal, setFinished }: AddShamersProps) => {
	const [checkInInputForm, setCheckInInputForm] = useState<CreateCheckInInput>(
		{}
	);

	const [checkInFrequency, setCheckInFrequency] = useState(1);

	const [shamers, setShamers] = useState<CreateShamerInput[]>([]);
	const [allowShaming, setAllowShaming] = useState(false);

	return (
		<motion.form
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			className="w-5/6 h-fit rounded-lg p-5 m-5 bg-white outline-zinc-200 outline py-10 flex justify-start items-center flex-col gap-5 shadow-lg hover:shadow-xl transition-all duration-300"
			onSubmit={async (e) => {
				e.preventDefault();

				if (!goal.id) {
					console.error("No goal ID found");
					toast.error("No goal ID found");
					return;
				}

				if (!checkInInputForm["type"]) {
					toast.error("Please select a check in type first!");
					return;
				}
				if (!checkInFrequency) {
					toast.error("Please select a frequency!");
					return;
				}

				if (!goal.deadline) {
					console.error("No goal deadline found");
					return;
				}

				console.log("checkInInputForm:", checkInInputForm);
				console.log("shamers:", shamers);

				function generateDateSeries(endDateStr: string, frequency: number) {
					const result = [];
					const endDate = new Date(endDateStr);
					let currentDate = new Date();

					while (currentDate <= endDate) {
						result.push(currentDate.toISOString());
						// Add frequency days to the current date
						currentDate = new Date(
							currentDate.setDate(currentDate.getDate() + frequency)
						);
					}

					console.log("result:", result);
					return result;
				}
				const emojis = [
					"😀",
					"😂",
					"🥺",
					"😍",
					"😒",
					"👍",
					"🚀",
					"🌈",
					"🎉",
					"💔",
				];

				generateDateSeries(goal.deadline, checkInFrequency).forEach(
					async (date, index) => {
						console.log("date:", date);
						await client
							.graphql({
								query: createCheckIn,
								variables: {
									input: {
										type: checkInInputForm["type"] ?? CheckInType.CLICK,
										goalCheckInsId: goal.id,
										title: `${goal.title} check in ${index + 1}/${
											generateDateSeries(
												goal.deadline as string,
												checkInFrequency
											).length
										}`,
										deadline: date,
										// Replace with actual Id

										icon: emojis[Math.floor(Math.random() * emojis.length)],
										userCheckInsId: "demo",
										checkInCreatorId: "demo",
									} satisfies CreateCheckInInput,
								},
							})
							.then((res) => {
								console.log(res);
							})
							.catch((err) => {
								console.error(err);
							});
					}
				);

				await shamers.forEach(async (shamer) => {
					console.log("shamer:", shamer);
					if (!shamer.id) return console.error("No shamer ID found");
					if (!shamer.name) return console.error("No shamer name found");
					if (!shamer.phoneNumber)
						return console.error("No shamer phone number found");

					await client.graphql({
						query: createShamer,
						variables: {
							input: {
								id: shamer.id,
								name: shamer.name,
								phoneNumber: shamer.phoneNumber,
								goalShamersId: goal.id,
							} satisfies CreateShamerInput,
						},
					});
				});

				setFinished(true);
			}}
		>
			<div className="flex flex-col justify-center items-center">
				<span className="font-bold text-lg">{goal.title}?</span>
				<span>Bring on the Shame</span>
			</div>
			<div className="w-full h-fit p-2 flex mobile:flex-col gap-5 justify-center items-end">
				<label className="flex flex-col gap-2 text-xs text-opacity-80 w-full">
					How do you want to check in?
					<Select
						label="Select a method"
						name="type"
						onChange={(e) => {
							setCheckInInputForm({
								...checkInInputForm,
								type: e.target.value as CheckInType,
							});
						}}
						defaultSelectedKeys={CheckInType.CLICK}
					>
						{[
							{ label: "Check In On App", value: CheckInType.CLICK },
							{ label: "Take a Photo", value: CheckInType.PHOTO },
							// { label: "Send a Text", value: CheckInType.TEXT, disabled: true },
							// {
							// 	label: "Send an Email",
							// 	value: CheckInType.EMAIL,
							// 	disabled: true,
							// },
							// {
							// 	label: "Make a Phone Call",
							// 	value: CheckInType.PHONE_CALL,
							// 	disabled: true,
							// },
							// {
							// 	label: "Post It On Social Media",
							// 	value: CheckInType.SOCIAL_MEDIA_POST,
							// 	disabled: true,
							// },
						].map((CheckInType: any) => (
							<SelectItem
								key={CheckInType.value}
								value={CheckInType.value}
								className="disabled:opacity-50 disabled:hover:opacity-50"
								unselectable={CheckInType.disabled ? "on" : "off"}
							>
								{CheckInType.label}
							</SelectItem>
						))}
					</Select>
				</label>
				<label className="flex flex-col gap-2 text-xs text-opacity-80 w-full">
					How often?
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
			<Button
				size="lg"
				color="primary"
				className=" flex-shrink-0 mb-1"
				onClick={() => {
					setShamers([
						...shamers,
						{
							id: uuidv4(),
						},
					]);
				}}
			>
				<BsPlus size={24} color="white" />
				Add Shamer
			</Button>
			{shamers.map((shamer, index) => (
				<ShamerComponent
					key={shamer.id}
					index={index}
					shamer={shamer}
					shamers={shamers}
					setShamers={setShamers}
				/>
			))}

			<div className="w-full justify-center items-center flex pt-20">
				<Checkbox
					size="lg"
					className="!text-xs w-full"
					checked={allowShaming}
					onChange={() => setAllowShaming(!allowShaming)}
				>
					These people have agreed to shame me and have my consent to do so
				</Checkbox>
			</div>
			<Button
				size="lg"
				color="primary"
				type="submit"
				disabled={!allowShaming}
				className="disabled:opacity-50 disabled:hover:opacity-50 "
				onClick={() => {
					console.log("checkInInputForm:", checkInInputForm);
					console.log("shamers:", shamers);
				}}
			>
				Start Shaming
			</Button>
		</motion.form>
	);
};

interface ShamerComponentProps extends HTMLAttributes<HTMLDivElement> {
	index: number;

	shamer: CreateShamerInput;
	shamers: CreateShamerInput[];
	setShamers: React.Dispatch<React.SetStateAction<CreateShamerInput[]>>;
}

const ShamerComponent = ({
	index,
	setShamers,
	shamer,
	shamers,
}: ShamerComponentProps) => {
	const [isInvalidPhone, setIsInvalidPhone] = useState(false);
	const validatePhone = (value: string) => {
		const pattern = /^(\([0-9]{3}\)\s?|[0-9]{3})-?\s?[0-9]{3}-?\s?[0-9]{4}$/;
		return pattern.test(value);
	};
	const validateEmail = (value: string) =>
		value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

	// const isInvalidPhone = React.useMemo(() => {
	// 	if ((shamers[index]?.phoneNumber ?? "") === "") return false;

	// 	return validatePhone(shamers[index]?.phoneNumber ?? "") ? false : true;
	// }, [shamers[index]]);

	return (
		<div className="w-full p-5 flex mobile:flex-col gap-2 rounded-lg bg-default-100 hover:shadow-xl shadow-lg">
			<div className="h-full w-full">
				<Input
					label="Name"
					name="name"
					value={shamers[index]?.name as string}
					onChange={(e) => {
						if (!shamer.id) {
							console.error("No shamer ID found");
							return;
						}

						const newShamers = [...shamers];
						newShamers[index] = {
							...shamers[index],
							[e.target.name]: e.target.value,
						};
						setShamers(newShamers);
					}}
					classNames={{}}
					type="text"
					className="w-full"
				/>
			</div>
			<div className="h-full w-full">
				<Input
					name="phoneNumber"
					value={shamers[index]?.phoneNumber as string}
					isInvalid={isInvalidPhone}
					label="Phone"
					color={isInvalidPhone ? "danger" : "success"}
					errorMessage={isInvalidPhone && "Please enter a valid phone number"}
					onChange={(e) => {
						if (!shamer.id) {
							console.error("No shamer ID found");
							return;
						}
						const newShamers = [...shamers];

						if (!validatePhone(e.target.value)) {
							setIsInvalidPhone(true);
						} else {
							setIsInvalidPhone(false);
						}

						newShamers[index] = {
							...shamers[index],
							[e.target.name]: e.target.value,
						};
						setShamers(newShamers);
					}}
					classNames={{}}
					type="phone"
					className="w-full"
				/>
			</div>

			<Button
				onClick={() => {
					setShamers((currentShamers) =>
						currentShamers.filter(
							(existingShamer) => existingShamer.id !== shamer.id
						)
					);
				}}
				className="h-12 w-12 bg-red-600 justify-center items-center flex rounded-full flex-shrink-0 opacity-70 hover:opacity-100 transition-all cursor-pointer"
			>
				<BsX size={24} color="white" />
			</Button>
		</div>
	);
};
