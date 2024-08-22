exports.handler = async function (event: any) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Lambda CDK!",
    }),
  };

  return response;
};
