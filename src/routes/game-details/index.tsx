import { useParams } from "@solidjs/router";
import { Show } from "solid-js";
import styles from "./index.module.css";
import { FaBrandsAndroid, FaBrandsApple, FaBrandsAppStoreIos, FaBrandsDiscord, FaBrandsTwitter, FaBrandsWindows, FaBrandsYoutube, FaSolidCircleCheck, FaSolidLink } from "solid-icons/fa";
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
          <Show when={game.isVerified}>
            <div class={styles.verified}>
              <FaSolidCircleCheck size={14} /> Verified by Sky Mavis
            </div>
          </Show>
          </div>

        </div>
        
        <Show when={game.banner}>
            <div class={styles.bannerCard}>
            <img src={game.banner} alt={game.name} class={styles.bannerImage} />
            </div>
          </Show>

        <div class={styles.descriptionCard}>
          <h2>Description</h2>
          <p>{game.description}</p>
          <div class={styles.socials}>
            <Show when={game.socials?.website}>
              <a href={game.socials?.website} target="_blank" rel="noopener noreferrer" class={styles.socialLink}>
                <FaSolidLink size={18} /> Website
              </a>
            </Show>

            <Show when={game.socials?.twitter}>
              <a href={game.socials?.twitter} target="_blank" rel="noopener noreferrer" class={styles.socialLink}>
                <FaBrandsTwitter size={18} /> Twitter/X
              </a>
            </Show>

            <Show when={game.socials?.youtube}>
              <a href={game.socials?.youtube} target="_blank" rel="noopener noreferrer" class={styles.socialLink}>
                <FaBrandsYoutube size={18} /> YouTube
              </a>
            </Show>
            
            <Show when={game.socials?.discord}>
              <a href={game.socials?.discord} target="_blank" rel="noopener noreferrer" class={styles.socialLink}>
                <FaBrandsDiscord size={18} /> Discord
              </a>
            </Show>
          </div>
        </div>

        <div class={styles.detailsCard}>

        <h2>Details</h2>
          <div class={styles.info}>
            {game.isPlayable
              ? <><strong>Playable:</strong> Yes</>
              : <><strong>Releases:</strong> {game.playableTime || "TBA"}</>
              }
          </div>

          <Show when={game.creator}>
          <div class={styles.info}>
            <strong>Developed by:</strong> {game.creator}
          </div>
            </Show>
         

          <div class={styles.platforms}>
          <strong>Platforms:</strong>
          <div class={styles.platformIcons}>
            <Show when={game.platforms?.includes("Windows")}>
              <FaBrandsWindows size={24} />
            </Show>
            <Show when={game.platforms?.includes("macOS")}>
              <FaBrandsApple size={24} />
            </Show>
            <Show when={game.platforms?.includes("iOS")}>
              <FaBrandsAppStoreIos size={24} />
            </Show>
            <Show when={game.platforms?.includes("Android")}>
              <FaBrandsAndroid size={24} />
            </Show>
          </div>
        </div> 
        <div class={styles.tags}>
          {game.genre.map((tag) => (
            <span class={styles.tag}>{tag}</span>
          ))}
        </div>
        
        </div>
      </div>
    </section>
  );
};

export default GameDetails;
