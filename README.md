# Bank Account Opening Portal

A static front-end interface designed to host an AI-powered account opening assistant. Built with HTML, CSS, and Vanilla JavaScript, integrating the WotNot chat widget.

## Project Structure
- `index.html`: Semantic HTML layout.
- `style.css`: UI styling and widget positioning constraints.
- `script.js`: Initialization logic and resilient polling mechanism for the third-party chat widget.

## Setup
1. Clone the repository.
2. Open `index.html` in your web browser. 
3. Ensure you have an active internet connection so the external WotNot script can load.

## Technical Notes
The WotNot widget is currently forced into the right-hand panel using `!important` CSS overrides. Future iterations should explore native embedding options provided by the WotNot API to ensure cross-device stability.
