const routes = require("./bin/routes");
const { app } = require("./bin/routes");

app.listen(3031, () => {
  console.log("Server on port http://localhost:3031");
});
