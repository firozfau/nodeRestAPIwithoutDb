const app = require("./app");
require("dotenv").config();

const server_port = process.env.PORT || 3000;

app.listen(server_port, () => {
    console.log(`Server is running at http://localhost:${server_port}`);
});


