export function Card(props) {
  return (
    <div style={style.container}>
      <div style={style.card}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h2 style={{ marginTop: 20 }}>Interests</h2>
        <ul style={style.ul}>
          {props.interests.split(",").map((data) => (
            <li>{data}</li>
          ))}
        </ul>
        <div style={style.links}>
          <a
            href={props.linkedin}
            style={style.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={props.instagram}
            style={style.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div  style = {style.crud}>
      <button>Save</button>
      <button>All Cards</button>
      </div>
    </div>
  );
}
export default Card;

const style = {
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  card: {
    width: 350,
    border: "1px solid",
    boxShadow: "0px 8px 4px rgba(0,0,0,0.2)",
    borderRadius: 7,
    padding: "30px 30px 20px",
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30,
  },
  link: {
    backgroundColor: "blue",
    color: "white",
    borderRadius: 7,
    padding: "10px 20px",
    textDecoration: "none", // Ensures the link has no underline
    textAlign: "center",
    width: "48%", // Gives both buttons space to align side by side
    boxSizing: "border-box", // Ensures padding is included in width calculation
  },

  ul: {
    listStyle: "none",
    padding: 5,
    margin: 0,
  },
  crud: {
    display: "flex",
    justifyContent: "space-between",  
  }
};
