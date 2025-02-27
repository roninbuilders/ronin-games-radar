import { useParams } from "@solidjs/router";
import { Show } from "solid-js";
import styles from "./index.module.css";
import { FaSolidCircleCheck } from "solid-icons/fa";
import { games } from "../../games";

const GameDetails = () => {
  const params = useParams();
  const game = games.find((g) => g.id.toString() === params.id);

  if (!game) {
    return <div class={styles.notFound}>Game not found.</div>;
  }

  return (
    <section class={styles.container}>
      <div class={styles.wrapper}>
        <button class={styles.backButton} onclick={() => history.back()}>
          ← Back to Browse Games
        </button>

        <div class={styles.header}>
          <img src={game.image} alt={game.name} class={styles.profileImage} />
          <div>
            <h1 class={styles.name}>{game.name}</h1>
            <p class={styles.genre}>{game.genre.join(" • ")}</p>
          </div>
        </div>

        <div class={styles.detailsCard}>
          <h2>Details</h2>
          <div class={styles.tags}>
            {game.genre.map((tag) => (
              <span class={styles.tag}>{tag}</span>
            ))}
          </div>

          <div class={styles.info}>
            <strong>Playable:</strong>{" "}
            {game.isPlayable
              ? "Yes"
              : `Releases: ${game.playableTime || "TBA"}`}
          </div>

          <div class={styles.info}>
            <strong>Creator:</strong> {game.creator}
          </div>

          <Show when={game.isVerified}>
            <div class={styles.verified}>
              <FaSolidCircleCheck size={14} /> Verified by Sky Mavis
            </div>
          </Show>
        </div>

        <div class={styles.descriptionCard}>
          <h2>Description</h2>
          <p>{game.description}</p>
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
