import styles from "./index.module.css";
import { For, Show } from "solid-js";
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
  const maxGenres = 2;

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
        <div class={styles.genreContainer}>
        <For each={props.genre.slice(0, maxGenres)}>
            {(tag) => <span class={styles.genreTag}>{tag}</span>}
          </For>
        </div>
        <p class={styles.playable}>
          {props.isPlayable ? "Playable Now" : `Playable: ${props.playableTime || "Soon"}`}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
