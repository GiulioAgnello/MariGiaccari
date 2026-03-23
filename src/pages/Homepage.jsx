import { useState } from "react";
import fotoHome from "../assets/FotoHome";
import Recensioni from "../components/Recensioni";

export default function Homepage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="homepage ">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img className="imgHero" src="public/HomepageHero.jpg" alt="Logo" />
          </div>
          <div className="col-12 col-md-6 mt-4 mt-md-0">
            <div className="article ">
              <div className="card-body">
                <h1 className="card-title text-center mb-4 fs-3">
                  WEDDING PHOTOGRAPHER IN PUGLIA
                </h1>
                <p className="card-text text-center">
                  La mia specialità è catturare i momenti e i dettagli senza
                  pose e senza forzature, raccontando l'unicità di coppie
                  romantiche ed eleganti. Il mio lavoro è quello di documentare
                  attraverso la fotografia il giorno del matrimonio, con
                  naturalezza, ma pur sempre curando appieno ogni momento ed
                  ogni dettaglio. La mia fotografia rappresenta una fusione
                  unica di arte contemporanea, moda e reportage. Trovando
                  ispirazione nei luoghi, nella moda e nella fotografia
                  editoriale, il mio impegno è quello di creare immagini che
                  esprimano un'estetica naturalmente romantica ed elegante,
                  rimanendo al contempo moderne e senza tempo. Il mio approccio
                  non si limita a fotografare un matrimonio; Le mie fotografie
                  devono essere autentiche: gli sposi desiderano immagini che
                  riflettano la loro vera essenza, la loro storia e le loro
                  emozioni. A mio parere, una foto è efficace quando trasmette
                  un'emozione genuina. Dai dettagli dell'abito alla magnifica
                  architettura della location, il mio obiettivo è catturare
                  l'eleganza e la grandiosità del giorno del matrimonio,
                  permettendo agli sposi di rivivere quei momenti inestimabili
                  in tutti i loro dettagli. La capacità di narrare attraverso la
                  fotografia può essere riassunta nel saper creare una
                  connessione profonda e autentica con ciò che si osserva,
                  vivendo veramente il momento in prima persona. Questo va oltre
                  il semplice atto di catturare un'immagine; si tratta di
                  immergersi completamente nella scena, comprendere le sue
                  sfumature e percepirne l'essenza. Attraverso questa
                  connessione, il fotografo può efficacemente trasmettere le
                  emozioni, le narrazioni e le sottili sfumature che rendono
                  ogni momento unico e significativo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery chiusa: 3 foto + bottone espandi */}
        <div className="row mt-4">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h2 className="text-center mt-5">QUALCHE MIO SCATTO</h2>
          </div>
          {fotoHome.slice(0, 3).map((src, i) => (
            <div
              key={i}
              className="col-4 d-flex justify-content-center align-items-center mt-3"
            >
              <img
                className="imgGallery w-100"
                src={src}
                alt={`Scatto ${i + 1}`}
                style={{ objectFit: "cover", cursor: "pointer" }}
                onClick={() => setExpanded(true)}
              />
            </div>
          ))}
          <div className="col-12 d-flex justify-content-center mt-3">
            <button
              className="btn btn-outline-dark"
              onClick={() => setExpanded(true)}
            >
              Vedi tutti gli scatti
            </button>
          </div>
        </div>
      </div>

      {/* Overlay gallery espansa */}
      {expanded && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.92)",
            zIndex: 1050,
            overflowY: "auto",
          }}
        >
          {/* Bottone chiudi fisso in alto a destra */}
          <button
            className="btn btn-light"
            onClick={() => setExpanded(false)}
            style={{
              position: "sticky",
              top: "1rem",
              left: "calc(100% - 5rem)",
              display: "block",
              zIndex: 1060,
            }}
          >
            ✕ Chiudi
          </button>

          <div className="container py-4">
            <div className="row g-3">
              {fotoHome.map((src, i) => (
                <div key={i} className="col-4">
                  <img
                    src={src}
                    alt={`Scatto ${i + 1}`}
                    className="w-100"
                    style={{
                      objectFit: "cover",
                      aspectRatio: "1",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <h2 className="text-center mt-5 mb-5">
            Iniziamo insieme a raccontare la vostra storia d'amore
          </h2>
          <div className="col-12 col-md-6">
            <div className="row flex-column align-items-center justify-content-center">
              <div className="col-12 col-md-6 text-center">
                <h5>Questo è il vostro momento!</h5>
                <p>
                  Cosa rimarrà del tuo matrimonio? È essenziale scegliere la
                  location perfetta per il tuo evento, i fiori, e naturalmente,
                  il tuo abito da sposa. Ma chi racconterà tutto questo? Chi
                  sarà in grado di immortalare quelle emozioni nel tempo? Scegli
                  con attenzione il tuo fotografo. Se desideri dare la massima
                  importanza alla fotografia, all’autenticità, e a ogni
                  dettaglio del tuo grande giorno, sarò la tua fotografa.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <img className="badgeHome" src="public\badgeHome.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img className="imgHero" src="public\Mari1jpg.jpg" alt="Mari1" />
          </div>
        </div>
      </div>
      <div className="my-5">
        <h4 className="text-center">Recensioni</h4>
        <Recensioni />
      </div>
    </div>
  );
}
