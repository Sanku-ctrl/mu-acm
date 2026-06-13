# ACM MU Chapter Website

The official, redesigned website for the Association for Computing Machinery (ACM) Student Chapter at Mahindra University. This project serves as a vibrant, interactive digital hub for technology enthusiasts, showcasing our events, team, and chapter initiatives.

## Tech Stack

* **Frontend Framework:** HTML5, CSS3, Vanilla JavaScript
* **UI Framework:** Bootstrap 5 (Softaculous hosting compliant)
* **Animations:** GSAP (GreenSock Animation Platform)
* **Typography:** CMU Serif (Computer Modern) & Inter

## Project Structure

This project is built as a highly modular Multi-Page Application (MPA) to ensure a seamless 1:1 translation into a backend framework in the future. 

```text
├── assets/          # SVG logos, images, and custom local web fonts
├── css/             # Global stylesheets and CSS variables
├── js/              # Vanilla JS logic and modular GSAP animation timelines
├── about.html       # Chapter mission and vision
├── buddy.html       # [WIP] UI framework for the upcoming Buddy System
├── events.html      # Feed of upcoming and past chapter events
├── index.html       # Dynamic landing page 
└── team.html        # Interactive grid of current chapter leadership

## Features

* **Custom Brand Identity:** Strictly adheres to the ACM Chapter brand guidelines, utilizing a custom loaded academic font stack (CMU Serif) and official hex codes.
* **High-Performance Animations:** Utilizes GSAP for smooth, professional scroll triggers, bento-box reveals, and hover interactions without bloating the DOM.
* **Scalable Architecture:** Component boundaries (like navbars and footers) are clearly marked and structures for easy backend porting.

## Future Roadmap

1. **Backend Integration:** Port the static HTML structure into **Laravel Blade template** to comply with the chapter's Softaculous hosting constraints.
2. **Buddy System & Leaderboard:** Connect the static `buddy.html` UI to a live relational database to facilitate member matching and engagement tracking.
3. **Dynamic Event Management:** Upgrade the `events.html` page to pull data dynamically from an admin dashboard.

## Local Development

To run this project locally:
1. Clone the repository.
2. Open the directory in your preferred IDE.
3. Start a local server (e.g., using the "Live Server" extension) and launch `index.html`. _(Note: Running via a local server is recommended over double-clicking the HTML files to ensure GSAP and custom fonts load correctly across all browsers.)_