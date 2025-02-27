import styles from "./index.module.css";
import { Show } from "solid-js";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { useNavigate } from "@solidjs/router";

type GameProps = {
  id: number;
  image: string;
  name: string;
  genre: string[]
  description: string
  isPlayable: boolean;
  isVerified: boolean;
  playableTime?: string; // Optional
};

const GameCard = (props: GameProps) => {
  const navigate = useNavigate();

  return (
    <div class={styles.card} onclick={() => navigate(`/game-details/${props.id}`)}>
      <div class={styles.imageContainer}>
        <img src={props.image} alt={props.name} class={styles.image} />
      </div>
      <div class={styles.info}>
        <Show when={props.isVerified}>
          <span class={styles.verified}><FaSolidCircleCheck size={14} /> Verified by Sky Mavis</span>
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
