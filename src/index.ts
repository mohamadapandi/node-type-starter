import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Create an Api
//GET POST PATCH DELETE
app.get("/customers", async (req: Request, res: Response) => {
  const customers = [
    {
      name: "John Doe",
      email: "john@gmail.com",
      phone: "082145678998",
    },
    {
      name: "Komeng",
      email: "komeng@gmail.com",
      phone: "087834567656",
    },
  ];
  res.status(200).json(customers);
});
