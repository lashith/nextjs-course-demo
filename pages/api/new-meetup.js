import { MongoClient } from "mongodb";
// /api/new-meetup
// POST /api/new-meetup

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://lashith:powerbm@cluster0.ue40e0d.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    //   meetupCollection.insertOne({});
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
