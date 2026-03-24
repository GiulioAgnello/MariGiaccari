export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <div className="about-intro">
                <h1 className="mb-4">About Me</h1>
                <p className="mb-3 fs-5">
                  Il mio percorso verso la fotografia ha avuto inizio molto
                  presto. Sin dall'infanzia, ho nutrito una{" "}
                  <strong>passione per l'arte dell'immagine</strong> che mi ha
                  guidata verso l'Istituto d'Arte e successivamente verso
                  l'Accademia di Belle Arti di Lecce, dove ho seguito il corso
                  di studi di Scenografia e Fotografia.
                </p>
                <p className="mb-3 fs-5">
                  Ho conseguito la <strong>laurea nel 2005</strong>, ed è stato
                  allora che ho iniziato a fotografare matrimoni.
                </p>
                <p className="fs-5 text-success">
                  <strong>
                    Oggi posso affermare di essere una fotografa professionista
                    specializzata nel reportage di matrimonio con oltre venti
                    anni di esperienza.
                  </strong>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="about-img">
                <img
                  src="public\fotoAboute\I96A1244-scaled.jpg"
                  alt="Mari Giaccari fotografa"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5" />

      {/* My Photography & Personal Section */}
      <section className="about-philosophy py-5">
        <div className="container">
          <div className="row g-5">
            {/* My Photography */}
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">📸 My Photography</h2>
              <div className="philosophy-text">
                <p className="mb-4 fs-5 lh-lg">
                  Che cos'è la fotografia, se non un modo per{" "}
                  <strong>
                    preservare i momenti più autentici e straordinari
                  </strong>{" "}
                  della nostra esistenza per poterli rivivere ogni volta che
                  desideriamo, come se stessimo sfogliando le pagine della
                  nostra storia?
                </p>
                <p className="mb-4 fs-5 lh-lg">
                  La fotografia è un <strong>racconto</strong> – il vostro
                  racconto. Un racconto che si snoda dai vostri preparativi fino
                  al taglio della torta. Il mio compito è catturare questi
                  momenti attraverso lo sguardo attento di una persona pronta a
                  coglierli.
                </p>
                <p className="mb-4 fs-5 lh-lg">
                  Il mio stile consiste nel catturare{" "}
                  <strong>dettagli, sguardi, colori e momenti</strong> con la
                  massima professionalità e accuratezza. Per questo motivo,
                  trovo essenziale <strong>conoscere i futuri sposi</strong>{" "}
                  prima del loro matrimonio, per poter capire come ritrarli nel
                  modo più autentico possibile.
                </p>
                <p
                  className="fs-5 lh-lg p-4 rounded"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  Se condividete questa visione, vi invito a sfogliare le mie
                  fotografie e a{" "}
                  <strong>
                    contattarmi per iniziare a raccontare la vostra storia
                    insieme
                  </strong>
                  .
                </p>
              </div>
            </div>

            {/* Personal */}
            <div className="col-12 col-lg-6">
              <h2 className="mb-4">💫 Personal</h2>
              <div className="personal-text">
                <p className="mb-4 fs-5 lh-lg">
                  Gli anni di{" "}
                  <strong>
                    intenso studio e la vasta esperienza sul campo
                  </strong>{" "}
                  mi hanno permesso di accumulare una serie di esperienze
                  personali e professionali di grande soddisfazione.
                </p>
                <p className="mb-4 fs-5 lh-lg">
                  Si dice che le donne abbiano una sensibilità particolarmente
                  spiccata. Da un lato credo che questo sia vero. Il mio
                  <strong> sguardo femminile</strong> mi consente di percepire e
                  cogliere quei dettagli e quelle emozioni particolarmente
                  sottili che possono sfuggire ad altri.
                </p>
                <p className="fs-5 lh-lg">
                  Nonostante siano ormai <strong>vent'anni</strong> che lavoro
                  nel campo della fotografia di matrimonio, ogni esperienza mi
                  emoziona come la prima volta. Credo che il segreto di tutto
                  risieda nel{" "}
                  <strong>
                    vivere ogni emozione come se fosse la prima volta
                  </strong>
                  . Solo così posso riuscire a catturare le vere emozioni dei
                  futuri sposi e di tutti i loro invitati, immergendomi
                  completamente in ciò che accade attorno a me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
