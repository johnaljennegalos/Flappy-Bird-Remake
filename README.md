# 🐦 Flappy-Bird-Remake (Vanilla JS Engine)

[![GitHub followers](https://img.shields.io/github/followers/johnaljennegalos?style=social)](https://github.com/johnaljennegalos)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **Physics Simulation. Collision Detection. Real-Time Game Loop.**

This repository contains a browser-based remake of the classic Flappy Bird, built entirely from scratch without using any external game engines (like Phaser or Unity). The focus of this project is mastering core JavaScript concepts like the game loop, DOM manipulation, and mathematical physics simulation.

---

## 📚 Table of Contents
- [Engineering Challenges](#-engineering-challenges)
- [Game Architecture](#-game-architecture)
- [Core Mechanics](#-core-mechanics)
- [Installation & Setup](#-installation--setup)

---

## 🧠 Engineering Challenges Overcome

Building a game without an engine requires writing the math and lifecycle hooks manually. Based on the commit history, here are the key technical hurdles solved in this project:

### 1. Vertical Boundary Constraints (Ceiling Physics)
*Commit: `fix the game ceiling of the bird when it decends`*
* **The Problem:** The bird could fly off the top of the screen, breaking the game boundaries, or the descent velocity would calculate incorrectly after hitting the top limit.
* **The Fix:** Implemented a hard ceiling coordinate constraint (`y <= 0`) combined with a velocity reset, ensuring smooth and realistic descent physics even when the player spams the jump control.

### 2. Asset Initialization & Preloading
*Commit: `initialize js and display images on window load`*
* **The Problem:** Triggering the game loop before the browser had fully downloaded the image assets caused invisible pipes or a missing bird sprite on the first frame.
* **The Fix:** Wrapped the game initialization logic inside a `window.onload` event listener, guaranteeing that the DOM and all visual assets are fully rendered before the `flappy.js` engine starts running.



---

## 🏗️ Game Architecture

The project enforces a strict separation of concerns, keeping logic, structure, and styling decoupled:

| File | Responsibility | Technical Details |
| :--- | :--- | :--- |
| `index.html` | Structure | Defines the game container, UI overlays (Score, Game Over), and imports scripts. |
| `style.css` | Presentation | Handles absolute positioning, z-indexing for background/foreground layers, and responsive layout. |
| `flappy.js` | Logic Engine | Controls the gravity accumulation, pipe spawning intervals, and collision math. |

---

## ⚙️ Core Mechanics

* **Gravity Engine:** Applies constant downward velocity to the bird's Y-axis per frame.
* **Input Handling:** Captures user events to apply immediate negative Y-velocity (the "jump").
* **AABB Collision:** Uses Axis-Aligned Bounding Box math to detect if the bird's coordinates intersect with the dynamically generated pipe coordinates or the ground.
* **Memory Management:** Despawns pipes once they exit the left side of the screen to prevent browser memory leaks.

---

## 🚀 Installation & Setup

Because this is a pure Vanilla JS project, there are no node modules or build steps required.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/johnaljennegalos/Flappy-Bird-Remake.git](https://github.com/johnaljennegalos/Flappy-Bird-Remake.git)

2. **Navigate into the folder:**
   ```bash
   cd Flappy-Bird-Remake

3. **Run the Game:**
   * Simply double-click `index.html` to open it in your default web browser.
   * *(Optional but recommended)*: Right-click `index.html` and open with VS Code's **Live Server** extension for the best development experience.

---

**John Aljenne Galos**
* 📧 [galosjohnaljenne@gmail.com](mailto:galosjohnaljenne@gmail.com)
* 🐙 [GitHub: johnaljennegalos](https://github.com/johnaljennegalos)

*Built to master the fundamentals.*
