import axios from "axios";
import React from "react";

let Backend_url = "https://names-d154c-default-rtdb.firebaseio.com/";

export const Get = async () => {
  try {
    let response = await axios.get(Backend_url + "/digi.json");
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
export const Post = async (data) => {
  try {
    let response = await axios.post(Backend_url + "/digi.json", data);
  } catch (error) {
    console.log(error.message);
  }
};
