import dotenv from "dotenv";
dotenv.config();
import db from "./src/config/database";
import app from "./src/app";

/*
DATABSE CONNECTION
*/

db.sync({ force: true })
  .then((result) => console.log("Synced 😎"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || process.env.DEV_PORT;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
