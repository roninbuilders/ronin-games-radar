import styles from "./index.module.css";
import { Show } from "solid-js";
import { FaSolidCircleCheck } from "solid-icons/fa";

type GameProps = {
  id: number;
  image: string;
  name: string;
  isPlayable: boolean;
  isVerified: boolean;
  playableTime?: string; // Optional
};

const GameCard = (props: GameProps) => {
  return (
    <div class={styles.card}>
      <div class={styles.imageContainer}>
        <img src={props.image} alt={props.name} class={styles.image} />
        <span class={styles.id}>#{props.id}</span>
      </div>
      <div class={styles.info}>
        <Show when={props.isVerified}>
          <span class={styles.verified}><FaSolidCircleCheck size={14} /> Verified</span>
        </Show>
        <h3 class={styles.name}>{props.name}</h3>
        <p class={styles.playable}>
          {props.isPlayable ? "Playable Now" : `Playable: ${props.playableTime || "Soon"}`}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
