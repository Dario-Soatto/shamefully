import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
	try {
		const res = await req.json();

		const phoneNumber = res.phoneNumber;

		const message = res.message;

		console.log(res);
		console.log(phoneNumber, message);

		// Assuming these are the correct fields you want to send, replace <string> placeholders with actual values or variables.
		const bodyObject = {
			phone_number: phoneNumber, // Use the variable directly
			task: "scold the user for missing their goals, continue the conversation in a stern but playful manner to encourage them to finish their task. Speak like you're from texas and be a little rude please :)", // Replace <string> with actual task or variable
			model: "turbo", // Replace <string> with actual model or variable
			answered_by_enabled: true,
			reduce_latency: true,
			voice_id: 4,
			// voice_preset_id: "<string>", // Replace <string> with actual voice preset id or variable
			// start_time: "<string>", // Replace <string> with actual start time or variable
			// webhook: "<string>", // Replace <string> with actual webhook or variable
			wait_for_greeting: false,
			first_sentence: message, // Use the variable directly
			language: "eng", // Replace <string> with actual language or variable
			max_duration: "1.5", // Specify the actual max duration if needed
			amd: false,
			interruption_threshold: 50, // Specify the actual interruption threshold if needed
		};

		const options = {
			method: "POST",
			headers: {
				authorization: process.env.BLAND_API_KEY, // Replace <authorization> with actual authorization token or variable
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bodyObject),
		};

		// @ts-ignore
		fetch("https://api.bland.ai/v1/calls", options)
			.then((response) => response.json())
			.then((response) => console.log(response))
			.catch((err) => console.error(err));

		return NextResponse.json({
			message: "Message sent successfully",
		});
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 }
		);
	}
}
