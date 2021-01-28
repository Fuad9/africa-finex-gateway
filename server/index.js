const express = require("express");
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
require("dotenv").config();

app.use(express());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* initialize mongodb ==================== */
const uri = `${process.env.BASE_URL}`;
const client = new MongoClient(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

/* connect to mongodb ===================*/
client.connect((err) => {
   const buy = client.db(`${process.env.DB_NAME}`).collection("buy");
   const sell = client.db(`${process.env.DB_NAME}`).collection("sell");

   app.get("/", (req, res) => {
      res.send("hello  from db, it's working");
   });

   app.post("/buy", (req, res) => {
      buy.insertOne(req.body).then((result) => {
         res.send(result.insertedCount > 0);
      });
   });

   app.post("/sell", (req, res) => {
      sell.insertOne(req.body).then((result) => {
         res.send(result.insertedCount > 0);
      });
   });
});

app.listen(port, () => console.log(`server is listening at ${port}`));
