import React from "react";
import { useState, useEffect } from "react";
import Mid from "./Mid";
import { Post, Get } from "./https/https";
import style from "./https/style/Heading.module.css";
const Heading = () => {
  let [names1, setnames1] = useState("");

  let [send, setsend] = useState([]);
  let [load, setload] = useState(false);

  let names = (event) => {
    setnames1(event.target.value);
  };
  let sub = async (event) => {
    event.preventDefault();
    setload(true);
    if (names1.length > 0) {
      let obj = { namesdigi: names1 };
      Post(obj);
    }
    setnames1("");

    let arrdata = [];
    let response = await Get();

    for (let key in response.data) {
      const digitalnames = {
        id: key,
        namedigikull: response.data[key].namesdigi,
      };
      setload(false);
      arrdata.push(digitalnames);
    }
    setsend(arrdata);
  };
  let context = <p>write your name</p>;
  if (send.length > 0) {
    context = <Mid namedata={send} />;
  }
  if (load) {
    context = <p>is loading!!!</p>;
  }

  return (
    <div className={`${style.mid}`}>
      <div className={`${style.c}`}>
        <div className={`${style.heading}`}>
          <h1>DIGIKULL STUDENTS</h1>
        </div>
        <p className={`${style.para}`}>Hello User</p>
        <form action="" onSubmit={sub} className={`${style.mid}`}>
          <input
            type="text"
            onChange={names}
            value={names1}
            className={`${style.inp}`}
          />
          <div>
            <button type="submit" className={`${style.btn}`}>
              ADD
            </button>
          </div>
        </form>
        <div className={`${style.mid}`}> {context}</div>
      </div>
    </div>
  );
};

export default Heading;
