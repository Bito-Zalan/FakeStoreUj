import React, { useContext } from "react";
import Kosar from "../components/Kosar";
import Vasarloter from "../components/Vasarloter";
import {ApiContext} from "../contexts/ApiContext";
import {KosarContext} from "../contexts/KosarContext";


function Public  ()  {
  const { termekLista } = useContext(ApiContext);
  const { kosarLista } = useContext(KosarContext);

  return (
    <div>
      <main className="row">
        <article className="col-lg-8">
          <h4>Vásárlótér</h4>
          <Vasarloter termekLista={termekLista} />
        </article>
        <aside className="col-lg-3">
          <h4>Kosár🛒</h4>
          <Kosar kosarLista={kosarLista} />
        </aside>
      </main>
    </div>
  );
};

export default Public;
