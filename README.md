# 🎮 Ronin Games Radar

Welcome to the **Ronin Games Radar**! This project showcases **all active and upcoming games** on the **Ronin Network**, helping players find, filter, and access their favorite games.

---

## 🚀 Contributing: Adding a New Game

We welcome contributions from the community! Follow the steps below to **add a new game** to the directory.

---

### **1️⃣ Fork & Clone the Repository**
First, **fork this repository** and clone it to your local machine:

```sh
git clone https://github.com/roninbuilders/ronin-games-radar.git
cd ronin-games-radar
```

Then, create a new branch for your changes:
```sh
git checkout -b add-<game-name>
```

---

### **2️⃣ Add Your Game to the `games.ts` File**
All games are stored in the `src/games/index.ts` file. Open this file and add your game in the **JSON format** following this structure:

#### **Example: Adding "Axie Infinity: Origins"**
```ts
export const games = [
  {
    id: 1,
    image: "https://cdn.axieinfinity.com/marketplace-website/banner/game/origins-game.png",
    banner: "https://cdn.axieinfinity.com/marketplace-website/banner/game/origins-banner-key-art.png",
    name: "Axie Infinity: Origins",
    genre: ["Turn-based", "Strategy", "Adventure"],
    isPlayable: true,
    isVerified: true,
    creator: "Sky Mavis",
    socials: {
      website: "https://axieinfinity.com/",
      twitter: "https://twitter.com/AxieInfinity",
      youtube: "https://www.youtube.com/channel/UCbFwe3COkDrbNsbMyGNCsDg",
    },
    platforms: ["Windows", "iOS", "Android", "macOS"],
    description:
      "Axie Infinity Origins is a card-based strategy game where players collect, own, and use an infinite variety of creatures called Axies to battle. Players can take down evil Chimeras in the Adventure mode or challenge other players in the Arena to reach the top of the Leaderboard.",
  },
  // Add your new game below this line ⬇
];
```

---

### **3️⃣ Commit & Push Your Changes**
Once you've added the game, commit your changes:
```sh
git add .
git commit -m "Added [Game Name] to games list"
git push origin add-<game-name>
```

---

### **4️⃣ Open a Pull Request (PR)**
1. **Go to your forked repository** on GitHub.  
2. Click **"Compare & pull request"**.  
3. Fill in the PR details:
   - **Title:** `Add [Game Name]`
   - **Description:** Briefly explain the game added.
4. Click **"Create pull request"**. 🎉

---

## 📜 Game Data Fields
| Field | Type | Description |
|--------|------|------------|
| `id` | `number` | Unique game identifier |
| `image` | `string (URL)` | Game logo/image |
| `banner` | `string (URL)` | Game banner for detailed view |
| `name` | `string` | Game title |
| `genre` | `string[]` | List of game genres (e.g., `["MOBA", "Strategy"]`) |
| `isPlayable` | `boolean` | `true` if playable now, `false` if not |
| `isVerified` | `boolean` | `true` if verified by Ronin |
| `playableTime` | `string` | Date when the game will be playable |
| `creator` | `string` | Developer or studio name |
| `socials.website` | `string (URL)` | Game's official website |
| `socials.twitter` | `string (URL)` | Game's Twitter/X page |
| `socials.youtube` | `string (URL)` | Game's YouTube channel |
| `platforms` | `string[]` | Supported platforms (e.g., `["Windows", "Android"]`) |
| `description` | `string` | Brief game summary |

---

## 🔥 Need Help?
If you need any assistance, **create an issue** or **reach out on Discord/Twitter**.