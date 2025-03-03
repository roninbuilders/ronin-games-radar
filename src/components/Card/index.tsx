import styles from "./index.module.css";
import { createSignal, For, Show } from "solid-js";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { useNavigate } from "@solidjs/router";

type GameProps = {
  id: string;
  image: string;
  name: string;
  genre: string[]
  banner?: string;
  description: string
  isPlayable: boolean;
  isVerified: boolean;
  playableTime?: string;
};

const GameCard = (props: GameProps) => {
  const navigate = useNavigate()
  const maxGenres = 2
  const [isPreloaded, setIsPreloaded] = createSignal(false)

  const preloadImage = () => {
    if (props.banner) {
      setIsPreloaded(true)
      const img = new Image()
      img.src = props.banner
    }
  };

  return (
    <div class={styles.card}
    onmouseenter={() => {
      if (!isPreloaded()) preloadImage()
    }}
    onclick={() => navigate(`/game-details/${props.id}`)}>
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
