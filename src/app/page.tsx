"use client";

import React, { type FC, useState, useEffect, HTMLAttributes } from "react";
import { Button } from "@nextui-org/react";
import { generateClient } from "aws-amplify/api";

import { Goal, User } from "@/API";
import { motion, AnimatePresence } from "framer-motion";
import { BsX, BsCheck } from "react-icons/bs";

import { getUser } from "@/graphql/queries";
import { CheckIn } from "../API";
import { updateCheckIn } from "@/graphql/mutations";
import { twMerge } from "tailwind-merge";
import Spline from "@splinetool/react-spline";

const client = generateClient({});

type HomePageProps = {
	params?: {
		id: string;
	};
	searchParams?: {
		search?: string;
	};
};

const HomePage: FC<HomePageProps> = () => {
	const [user, setUser] = useState<User>({} as User);
	const [splineLoaded, setSplineLoaded] = useState(false);

	useEffect(() => {
		async function getLoader() {
			const { spiral } = await import("ldrs");
			spiral.register();
		}
		getLoader();
	}, []);

	useEffect(() => {
		// Fetch the user
		client
			.graphql({ query: getUser, variables: { id: "demo" } })
			.then((response) => {
				console.log(response);

				if (!response.data.getUser) {
					console.error("No user found");
					return;
				}

				setUser(response.data.getUser as User);
			});
	}, []);

	const currentCheckIns: any = [];

	user.checkIns?.items?.forEach((checkIn) => {
		if (!checkIn) return;

		const isDeadlineSoon = (deadline: string) => {
			const deadlineDate = new Date(deadline).getTime();
			const now = new Date().getTime();
			const oneDayInMs = 24 * 60 * 60 * 1000;
			return deadlineDate - now < oneDayInMs && deadlineDate - now > 0;
		};

		if (!isDeadlineSoon(checkIn.deadline as string)) return;

		if (checkIn.status === "SUCCESSFUL" || checkIn.status === "FAILED") return;

		currentCheckIns.append(
			<CheckInComponent key={checkIn.id} checkIn={checkIn} />
		);
	});

	console.log("length", currentCheckIns?.length);

	return (
		<div className="w-full h-full flex flex-col justify-start py-20 pb-40 items-center gap-20">
			{user.id ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="w-full h-full justify-start items-center flex flex-col gap-10"
				>
					<div className="font-bold text-xl text-opacity-90">
						{`Hey ${user.firstName} ${user.lastName}`}
					</div>
					<div className="flex flex-col gap-4 w-5/6">
						{currentCheckIns?.length === 0 ? (
							<div className="w-full h-full flex flex-col justify-center items-center gap-4">
								{!splineLoaded && <l-spiral size={45} color="coral"></l-spiral>}
								<Spline
									// style={{
									// 	background:
									// 		"radial-gradient(circle, rgba(0,0,0,0.2	) 0%, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0) 100%)",
									// }}
									className={twMerge(
										"!h-[50vh] opacity-0 transition-all  duration-300 -mt-40",
										splineLoaded && "opacity-100 -mt-0 "
									)}
									onLoad={() => {
										console.log("Spline loaded");
										setSplineLoaded(true);
									}}
									scene="https://prod.spline.design/DUCYHHZaaS0eoNm1/scene.splinecode"
								/>
								Nothing to see here, create some goals to get started!
								<Button color="primary">
									<a href="/goals">Get Started</a>
								</Button>
							</div>
						) : (
							<AnimatePresence presenceAffectsLayout>
								{currentCheckIns}
							</AnimatePresence>
						)}
					</div>

					{/* <div className="flex flex-col gap-4 w-5/6">
						{user.goals?.items?.map((goal) => {
							if (!goal) return null;
							console.log(goal);

							return <GoalComponent key={goal.id} goal={goal} />;
						})}
					</div> */}
				</motion.div>
			) : (
				<l-spiral size={45} color="coral"></l-spiral>
			)}
		</div>
	);
};

export default HomePage;

interface CheckInComponentProps extends HTMLAttributes<HTMLDivElement> {
	checkIn: CheckIn;
}

const CheckInComponent = ({ checkIn }: CheckInComponentProps) => {
	// const isInvalidPhone = React.useMemo(() => {
	// 	if ((shamers[index]?.phoneNumber ?? "") === "") return false;

	// 	return validatePhone(shamers[index]?.phoneNumber ?? "") ? false : true;
	// }, [shamers[index]]);

	const emojis = ["😀", "😂", "🥺", "😍", "😒", "👍", "🚀", "🌈", "🎉", "💔"];
	const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.3 }}
			className="w-full p-5 flex flex-col lg:flex-row  h-fit justify-center items-center transition-all duration-300 gap-4 rounded-2xl bg-default-100 hover:shadow-xl shadow-lg"
		>
			<div className="h-full w-fit -ml-10">
				<div className="text-6xl">{checkIn.icon ?? randomEmoji}</div>
			</div>
			<div className="h-full w-full   whitespace-pre flex items-center">
				<label className="flex flex-col h-full text-xs">
					Title
					<span className="font-bold text-xl !text-opacity-85">
						{checkIn?.title ?? "check in"}
					</span>
				</label>
			</div>
			{checkIn?.parentGoal?.title && (
				<div className="h-full w-full  whitespace-pre flex items-center">
					<label className="flex flex-col h-full text-xs">
						Goal
						<span className="font-bold text-xl">
							{checkIn?.parentGoal?.title}
						</span>
					</label>
				</div>
			)}
			<div className="h-full w-full  whitespace-pre flex items-center">
				<label className="flex flex-col h-full text-xs">
					Deadline
					<span className=" text-lg">
						{new Date(checkIn?.deadline as string).toLocaleDateString()}
					</span>
				</label>
			</div>
			<div className="h-full w-full flex items-center justify-around">
				<Button
					onClick={() => {
						client.graphql({
							query: updateCheckIn,
							variables: {
								input: {
									id: checkIn.id,
									status: "SUCCESSFUL",
								},
							},
						});
					}}
					className="h-12 w-12 bg-green-600 justify-center items-center flex rounded-full flex-shrink-0 opacity-70 hover:opacity-100 transition-all cursor-pointer"
				>
					<BsCheck size={24} color="white" />
				</Button>
				<Button
					onClick={() => {
						client.graphql({
							query: updateCheckIn,
							variables: {
								input: {
									id: checkIn.id,
									status: "FAILED",
								},
							},
						});
						console.log("calling");

						fetch("/api/call-me", {
							method: "POST",
							body: JSON.stringify({
								phoneNumber: "+14694940502",
								message: `Hey dummy! I'm calling about your goal ${checkIn.parentGoal?.title}. What happened? Why didn't you get it done?`,
							}),
						});
					}}
					className="h-12 w-12 bg-red-600 justify-center items-center flex rounded-full flex-shrink-0 opacity-70 hover:opacity-100 transition-all cursor-pointer"
				>
					<BsX size={24} color="white" />
				</Button>
			</div>
		</motion.div>
	);
};

interface GoalComponentProps extends HTMLAttributes<HTMLDivElement> {
	goal: Goal;
}

const GoalComponent = ({ goal }: GoalComponentProps) => {
	return (
		<div className="h-64 w-64">
			<div className="w-full h-full">
				<h1>Goal</h1>
				<h2>{goal.title}</h2>
				<p>{goal.description}</p>
				<p>{goal.deadline}</p>
			</div>
		</div>
	);
};
