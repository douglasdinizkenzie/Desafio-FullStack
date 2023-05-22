import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected!");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT!, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
