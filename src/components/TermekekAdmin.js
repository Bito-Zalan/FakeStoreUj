import React, { useContext } from "react";
import TermekekAdminSor from "./TermekekAdminSor";
import { ApiContext } from "../contexts/ApiContext";

function TermekekAdmin() {
  const { termekLista } = useContext(ApiContext);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col1">ID</th>
            <th scope="col1">Title</th>
            <th scope="col1">Price</th>
            <th scope="col1">Description</th>
            <th scope="col1">Category</th>
          </tr>
        </thead>
        <tbody>
        {termekLista.map((termek) => {
            return <TermekekAdminSor lista={termekLista} termek={termek} key={termek.id}/>
        })}
        </tbody>
      </table>
    </>
  );
}

export default TermekekAdmin;
