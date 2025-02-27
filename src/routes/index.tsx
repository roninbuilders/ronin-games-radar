import { For } from "solid-js";
import styles from "./index.module.css";
import GameCard from "../components/Card";
import { games } from "../games";

const MainView = () => {
  return (
    <main class={styles.main}>
      <h2 class={styles.title}>Ready to Play</h2>
      <div class={styles.cardContainer}>
        <For each={games}>{(game) => {
          if (game.isPlayable) {
            return <GameCard {...game} />;
          }
        }}</For>
      </div>
      <h2 class={styles.title}>Upcoming Games</h2>
      <div class={styles.cardContainer}>
        <For each={games}>{(game) => {
          if (!game.isPlayable) {
            return <GameCard {...game} />;
          }
        }}</For>
      </div>
    </main>
  );
};

export default MainView;
