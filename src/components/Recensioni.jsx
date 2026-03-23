import recensioni from "../assets/RecensioniData";

const totaleRecensioni = 39;
const votoMedio = 5.0;

function Stelle({ numero }) {
  return (
    <span style={{ color: "#f5a623", fontSize: "1.1rem" }}>
      {"★".repeat(numero)}{"☆".repeat(5 - numero)}
    </span>
  );
}

function CardRecensione({ recensione }) {
  return (
    <div
      style={{
        borderTop: "1px solid #e0e0e0",
        padding: "1rem 0",
      }}
    >
      <div className="d-flex align-items-center gap-2 mb-1">
        {/* Avatar */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#ccc",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1rem",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {recensione.avatar ? (
            <img src={recensione.avatar} alt={recensione.nome} style={{ width: "100%", borderRadius: "50%" }} />
          ) : (
            recensione.nome[0]
          )}
        </div>

        {/* Nome e data */}
        <div>
          <span className="fw-semibold">{recensione.nome}</span>
          <span className="text-muted ms-2" style={{ fontSize: "0.85rem" }}>
            · Data nozze: {recensione.dataNozze}
          </span>
          <div>
            <Stelle numero={recensione.stelle} />
            <span className="ms-1 text-muted" style={{ fontSize: "0.85rem" }}>{recensione.stelle.toFixed(1)}</span>
          </div>
        </div>
      </div>

      <p className="fw-bold mb-1">{recensione.titolo}</p>
      <p className="mb-0" style={{ fontSize: "0.9rem", color: "#333" }}>
        {recensione.testo.slice(0, 120)}...{" "}
        <span style={{ color: "#c0392b", cursor: "pointer" }}>Leggi tutto</span>
      </p>
    </div>
  );
}

export default function Recensioni() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "2rem auto",
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header scuro */}
      <div
        style={{
          background: "#2c2c2c",
          color: "#fff",
          textAlign: "center",
          padding: "1.2rem",
        }}
      >
        <h5 className="mb-1 fw-bold">Mari Giaccari Fotografa</h5>
        <div>
          <Stelle numero={5} />
          <span className="ms-2">{totaleRecensioni} recensioni</span>
        </div>
        <div style={{ fontSize: "0.95rem" }}>{votoMedio.toFixed(1)} su 5</div>
      </div>

      {/* Lista recensioni */}
      <div style={{ padding: "0 1.2rem" }}>
        {recensioni.map((r, i) => (
          <CardRecensione key={i} recensione={r} />
        ))}
      </div>

      {/* Footer */}
      <div style={{ padding: "1rem 1.2rem", borderTop: "1px solid #e0e0e0" }}>
        <button
          className="btn btn-outline-secondary w-100 mb-3"
          style={{ borderRadius: 4 }}
        >
          Leggi tutte le nostre recensioni
        </button>
        <div className="text-center" style={{ color: "#c0392b", fontSize: "0.9rem" }}>
          ♥ matrimonio.com
        </div>
      </div>
    </div>
  );
}
