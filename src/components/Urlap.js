import React, { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { Form } from "react-bootstrap";

function Urlap() {
  const { postAdat, katLista } = useContext(ApiContext);

  const [adat, setAdat] = useState({
    title: "Ez a termék neve",
    price: 1000,
    category: "....",
    description: ".....",
    image: ".....",
  });

  function valtoztatasKezeles(event) {
    //az inputba beirt adatokkal kell frissíteni az objektumunkat
    const sedegObj = { ...adat };
    sedegObj[event.target.id] = event.target.value;
    setAdat({ ...sedegObj });
  }

  function elkuld(event) {
    //leszedjük az alapértelmezett eseménykezelőt
    event.preventDefault();
    console.log("elküld", adat);
    postAdat("/products", adat);
  }
  return (
    <div>
      <form onSubmit={elkuld}>
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Termék neve
          </label>
          <input
            type="text"
            value={adat.title}
            onChange={valtoztatasKezeles}
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="price" class="form-label">
            Termék neve
          </label>
          <input
            type="number"
            min={1000}
            max={100000}
            value={adat.price}
            onChange={valtoztatasKezeles}
            className="form-control"
            id="price"
            aria-describedby="priceHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="price" class="form-label">
            Termék neve
          </label>
          <textarea
            type="number"
            value={adat.description}
            onChange={valtoztatasKezeles}
            className="form-control"
            id="price"
            aria-describedby="priceHelp"
            rows={3}
          />
        </div>
        <Form.Select aria-label="Default select example">
          <option>Kategóriák</option>
          {katLista.map((kategoria) => {
            return <option value={kategoria}>{kategoria}</option>
          })};
        </Form.Select>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Urlap;
