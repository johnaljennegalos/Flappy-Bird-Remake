# 🐦 Flappy Bird Remake

A browser-based remake of the classic **Flappy Bird**, built entirely from scratch using **Vanilla JavaScript**, **HTML5**, and **CSS3**. This project focuses on mastering fundamental game development concepts such as game loops, physics simulation, collision detection, and DOM manipulation without relying on external game engines.

---

## ✨ Features

* 🎮 Classic Flappy Bird gameplay
* ⚡ Custom game engine built with Vanilla JavaScript
* 🧮 Physics-based bird movement and gravity simulation
* 💥 Real-time collision detection
* 🏗 Dynamic pipe generation and obstacle management
* 📊 Live score tracking
* 🖥 Lightweight and browser-based
* 🚫 No frameworks or external game engines required

---

## 🛠 Tech Stack

### Frontend

* JavaScript (ES6+)
* HTML5
* CSS3

### Core Concepts

* Game Loop Architecture
* Physics Simulation
* Collision Detection
* Event Handling
* DOM Manipulation

---

## 📁 Project Structure

```text
Flappy-Bird-Remake/
├── index.html   # Game structure and UI elements
├── style.css    # Styling and layout
└── flappy.js    # Game engine, physics, and collision logic
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/johnaljennegalos/Flappy-Bird-Remake.git
cd Flappy-Bird-Remake
```

### 2. Run the Game

Since this is a pure Vanilla JavaScript project, no dependencies or build steps are required.

#### Option 1: Open Directly

Simply double-click:

```text
index.html
```

to launch the game in your browser.

#### Option 2: Use a Local Development Server (Recommended)

Using Python:

```bash
python -m http.server 5500
```

Open:

```text
http://localhost:5500
```

Or use the **Live Server** extension in Visual Studio Code for automatic reloads during development.

---

## 🧠 How It Works

### 1. Game Initialization

The game loads all visual assets and initializes the engine after the browser finishes loading:

```javascript
window.onload
```

This prevents missing sprites and rendering issues during startup.

### 2. Game Loop

A continuous update cycle handles:

* Bird movement
* Gravity calculations
* Pipe generation
* Collision checks
* Score updates
* Rendering

### 3. Physics Engine

The bird's vertical movement is controlled through:

* Constant downward gravity
* Upward velocity on jump input
* Boundary constraints

This creates the familiar Flappy Bird flying behavior.

### 4. Collision Detection

The game uses **Axis-Aligned Bounding Box (AABB)** collision detection to determine whether the bird intersects:

* Pipes
* Ground
* Screen boundaries

### 5. Obstacle Management

Pipes are:

* Spawned dynamically
* Moved across the screen
* Removed once off-screen

This helps maintain performance and prevents memory issues.

---

## 🔧 Engineering Challenges Solved

### Ceiling Boundary Physics

**Problem:**

The bird could exceed the upper screen boundary, causing unrealistic movement and physics glitches.

**Solution:**

Implemented:

* Maximum Y-position constraints
* Velocity resets when hitting the ceiling

This ensures stable and consistent movement.

---

### Asset Initialization & Loading

**Problem:**

Game assets occasionally failed to render on the first frame because the game loop started before images finished loading.

**Solution:**

Wrapped initialization inside:

```javascript
window.onload
```

This guarantees all assets are available before gameplay begins.

---

## ⚙️ Core Mechanics

### Gravity System

Applies continuous downward acceleration to the bird every frame.

### Jump Controls

User input applies an immediate upward force, allowing the bird to navigate obstacles.

### Collision Engine

Uses AABB collision mathematics to detect interactions with:

* Pipes
* Ground
* Boundaries

### Memory Optimization

Off-screen pipes are automatically removed to prevent unnecessary memory usage.

---

## 📌 Notes & Limitations

* Designed primarily for desktop browsers.
* Performance may vary on lower-end devices.
* Collision detection uses rectangular hitboxes for efficiency.
* Browser support is best on modern browsers such as:

  * Google Chrome
  * Microsoft Edge
  * Firefox
  * Brave

---

## 🗺 Roadmap

* [ ] Add sound effects and background music
* [ ] Add high-score persistence using Local Storage
* [ ] Add difficulty levels
* [ ] Improve mobile responsiveness
* [ ] Add pause and restart controls
* [ ] Add animated bird sprites

---

## 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/my-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/my-feature
```

5. Open a Pull Request

Feel free to submit bug reports, improvements, or feature requests through GitHub Issues.

---

## 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project under the terms of the license.

---

## 👨‍💻 Author

**John Aljenne Galos**

📧 [galosjohnaljenne@gmail.com](mailto:galosjohnaljenne@gmail.com)

🐙 GitHub: https://github.com/johnaljennegalos

If you found this project helpful, consider giving it a ⭐ on GitHub.

---

### Built to Master the Fundamentals of Game Development 🎮
