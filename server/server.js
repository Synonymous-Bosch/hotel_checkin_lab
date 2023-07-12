const express = require("express");
const app = express();
const cors = require("cors");

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");

app.use(express.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("checkins");
    const checkinCollection = db.collection("checkins");
    const checkinRouter = createRouter(checkinCollection);
    app.use("/api/checkins", checkinRouter);
  })
  .catch(console.error);

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
