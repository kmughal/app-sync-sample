"use strict";

exports.graphql = (event, context, callback) => {
  console.log("Received event {}", JSON.stringify(event, 3));

  const consumerKey = event.arguments.consumer_key;
  const consumerSecret = event.arguments.consumer_secret;

  console.log("Got an Invoke Request.");
  switch (event.field) {
    case "helloWorld": {
      callback(
        null,
        `You have invoked HelloWorld command with ${
          consumerKey || "key not mentioned"
        } , ${consumerSecret || "secrete missing"}`
      );
      break;
    }

    default: {
      callback(`Unknown field, unable to resolve ${event.field}`, null);
      break;
    }
  }
};
