import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const snsClient = new SNSClient({ region: "us-west-1" });
const params = {
	Message: "Your message text",
	PhoneNumber: "+14156056215",
};

export async function GET(req: NextRequest) {
	try {
		const data = await snsClient.send(new PublishCommand(params));
		console.log("Success.", data);
		return NextResponse.json({
			message: "Message sent successfully",
			messageId: data.MessageId,
		});
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 }
		);
	}
}
