import React from "react";
import { Client } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("656d18a35199c68e9960");
const Home = () => {
  return <div>Home</div>;
};

export default Home;
