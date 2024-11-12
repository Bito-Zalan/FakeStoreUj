import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function TermekekAdminSor({ termek }) {
  const { termekTorles } = useContext(ApiContext);

  return (
    <>
      <tr>
        <th>{termek.id}</th>
        <td>{termek.title}</td>
        <td>{termek.price}</td>
        <td>{termek.description}</td>
        <td>{termek.category}</td>
        <td>
          <button type="button" className="btn btn-dark">
            Módosítás
          </button>
        </td>
        <td>
          <button
            id={termek.id}
            type="button"
            className="btn btn-dark"
            onClick={() => termekTorles(termek.id)}
          >
            Törlés
          </button>
        </td>
      </tr>
    </>
  );
}

export default TermekekAdminSor;
