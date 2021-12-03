import React, {useState} from "react";
import "./styles.css";

export default function App() {
  const [gifts, setGifts] = useState(["Medias", "Mantecol","Pernil de cerdo"]);
  function handleSubmit (e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const gift = e.currentTarget.gift.value;
    setGifts((gifts) => gifts.concat(gift));
    e.currentTarget.gift.value = "";
  }
  return (
    <main className="App">
      <section>

      <h1>Regalos:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="gift"></input>
        <button type="submit">Agregar</button>
      </form>
      <ul>

      {gifts.map((gift) => (<li key={gift}>{gift}</li>))}
      </ul>
      </section>
    </main>
  );
}
