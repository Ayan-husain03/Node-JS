const sumRequest = (req, res) => {
  console.log("in sum request function");
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const fullbody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullbody);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
    res.write(`
        <h1>Result : ${result}</h1>
        <a href='/calculator'>Go back to calculator</a>`);
    res.end();
  });
};

module.exports = sumRequest;
