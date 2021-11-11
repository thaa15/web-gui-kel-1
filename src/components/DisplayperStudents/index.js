import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { DeleteButton } from "./styled";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const DisplayperStudents = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://gui-kel-1.herokuapp.com/profiles/${params.id}`
      );
      setData(response.data.data.profiles);
    };
    fetchData();
  }, [params.id, data]);

  const DeleteData = async () => {
    await axios.delete(`https://gui-kel-1.herokuapp.com/profiles/${params.id}`);
    history("/web-gui-kel-1");
  };
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "60px auto 10px" }}>
        Detailed Mahasiswa
      </h1>
      <div style={{ height: "100%", width: "80%", margin: "80px auto 10px" }}>
        <h3 style={{ marginBottom: "10px" }}>Nama : {data.name}</h3>
        <h3 style={{ marginBottom: "10px" }}>NPM : {data.npm}</h3>
        <h3 style={{ marginBottom: "10px" }}>
          Aktivitas Terakhir : {data.activity}
        </h3>
        <h3 style={{ marginBottom: "10px" }}>
          Waktu Akses Terkahir:{" "}
          {moment(data.updatedAt).format("DD-MM-YYYY, h:mm:ss a")}
        </h3>
        <DeleteButton onClick={DeleteData}>Delete</DeleteButton>
      </div>
    </>
  );
};

export default DisplayperStudents;
