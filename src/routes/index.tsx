import { For } from "solid-js";
import styles from "./index.module.css";
import GameCard from "../components/Card";
import { games } from "../games";

const MainView = () => {
  return (
    <main class={styles.main}>
      <h2 class={styles.title}>Recent Games</h2>
      <div class={styles.cardContainer}>
        <For each={games}>{(game) => <GameCard {...game} />}</For>
      </div>
    </main>
  );
};

export default MainView;
