"use client";

import React, { type FunctionComponent } from "react";
import { Input, Textarea } from "@nextui-org/react";

interface HomePageProps {}

export const HomePage: FunctionComponent<HomePageProps> = () => {
	return (
		<div className="w-full h-full flex flex-col justify-start pt-20 items-center">
			<div className="w-5/6 h-96 rounded-lg p-5 m-5 bg-white outline-zinc-200 outline  flex justify-start items-center flex-col gap-5 shadow-xl hover:shadow-lg transition-all duration-300">
				<div className="font-bold ">Add your goal</div>
				<Input
					label="Goal"
					placeholder="What's your goal?"
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
					label="Description"
					placeholder="Enter a description"
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
			</div>
		</div>
	);
};

export default HomePage;
