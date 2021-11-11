import React, { useState, useEffect } from "react";
import axios from "axios";
import { TemplateStudents, GridStudents, BoxStudents } from "./style";
import theme from "../../styles/theme";

const DisplayAllStudents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://gui-kel-1.herokuapp.com/profiles"
      );
      setData(response.data.data.prof);
    };
    fetchData();
  }, [data]);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "60px auto 10px" }}>
        Daftar Mahasiswa Online
      </h1>
      <TemplateStudents>
        {data.length === 0 ? (
          <h3
            style={{
              textAlign: "center",
              margin: "60px auto",
              color: theme.color.red,
            }}
          >
            TIDAK ADA MAHASISWA YANG SEDANG ONLINE!
          </h3>
        ) : (
          <GridStudents>
            {data.map((item, idx) => {
              return (
                <BoxStudents key={idx} to={`/web-gui-kel-1/${item.id}`}>
                  <h3>{item.name}</h3>
                  <h6 className="bold">{item.npm}</h6>
                  <h6>Aktifitas: {item.activity}</h6>
                </BoxStudents>
              );
            })}
          </GridStudents>
        )}
      </TemplateStudents>
    </>
  );
};

export default DisplayAllStudents;
