/* Amplify Params - DO NOT EDIT
	API_SHAMEFULLY_GRAPHQLAPIENDPOINTOUTPUT
	API_SHAMEFULLY_GRAPHQLAPIIDOUTPUT
	API_SHAMEFULLY_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const https = require("https");
const AWS = require("aws-sdk");
const urlParse = require("url").URL;
const appsyncUrl = process.env.API_SHAMEFULLY_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const endpoint = new urlParse(appsyncUrl).hostname.toString();
const apiKey = process.env.API_SHAMEFULLY_GRAPHQLAPIKEYOUTPUT;

const createUser = `
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`;

exports.handler = async (event, context = { done: () => {} }) => {
	const userCreationReq = new AWS.HttpRequest(appsyncUrl, region);

	console.log("event", event);
	console.log("event.request.userAttributes", event.request.userAttributes);

	const { sub, given_name, family_name, email, phone_number } =
		event.request.userAttributes;

	console.log("event.request.userAttributes", event.request);

	const userInput = {
		input: {
			id: sub,
			name: given_name + " " + family_name,
			firstName: given_name,
			lastName: family_name,
			email: email,
			owner: sub,
			phoneNumber: phone_number,
		},
	};

	console.log(event.request.userAttributes);

	userCreationReq.method = "POST";
	userCreationReq.path = "/graphql";
	userCreationReq.headers.host = endpoint;
	userCreationReq.headers["Content-Type"] = "application/json";

	/* Create the user object */
	userCreationReq.body = JSON.stringify({
		query: createUser,
		operationName: "createUser",
		variables: userInput,
	});

	if (apiKey) {
		userCreationReq.headers["x-api-key"] = apiKey;
	} else {
		const userCreationSigner = new AWS.Signers.V4(
			userCreationReq,
			"appsync",
			true
		);
		userCreationSigner.addAuthorization(
			AWS.config.credentials,
			AWS.util.date.getDate()
		);

		const starterPacCreationSigner = new AWS.Signers.V4(
			starterPacCreationReq,
			"appsync",
			true
		);
		starterPacCreationSigner.addAuthorization(
			AWS.config.credentials,
			AWS.util.date.getDate()
		);
	}

	const userCreationPromise = new Promise((resolve, reject) => {
		const httpRequest = https.request(
			{ ...userCreationReq, host: endpoint },
			(result) => {
				let data = "";

				result.on("data", (chunk) => {
					data += chunk;
				});

				result.on("end", () => {
					resolve(JSON.parse(data.toString()));
				});
			}
		);

		httpRequest.write(userCreationReq.body);
		httpRequest.end();
	});

	const data = await Promise.all([userCreationPromise]);

	console.log(data.toString());
	if (context.done) context.done(null, event);
};
