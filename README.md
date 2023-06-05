# Rick and Morty React App

This project is a React-based web application that utilizes the Rick and Morty API to display information about the characters from the TV show "Rick and Morty". It allows users view detailed information about each character and quiz them on the episode and characters.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- JavaScript: The programming language used to develop the application logic.
- HTML: The markup language for structuring the web pages.
- CSS: The styling language used to define the presentation of the application.
- Rick and Morty API: An API that provides data about characters, episodes, and locations from the Rick and Morty TV show.

## Approach

The project was built using React to create a modular and reusable component-based architecture. The application state is managed using React hooks, and the data is fetched from the Rick and Morty API using JavaScript's `fetch` function.

The application consists of the following components:

- `App`: The root component that renders the header and character list.
- `Header`: Displays the application logo and pages.
- `Footer`: Displays the application logo and pages.
- `Episode`: Displays the images and information of each character.
- `EpisodeDetails`: Displays the images, characters, and quiz of the episode.

The application allows users to search characters by name, species, or status. The search functionality filters the character list in real-time as the user types in the search input.

Users can click on a character card to view more detailed information about that character, including their image, status, species, gender, and origin.

## Live Site

A live version of the application is deployed on [GitHub Pages](https://a1dric5.github.io/Mod-2-Project).

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/rick-and-morty-react-app.git`
2. Navigate to the project directory: `cd rick-and-morty-react-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the app in action.

## Unsolved Problems

- .map method of Season 2: Currently, the application only fetches the first season of characters from the API. Fixing this error would allow users to view more characters beyond the first season.
- Retrieving data beyong season 2: Unfortunately, the available API only had access to season 2. The application would be more enjoyable if I had access to more content.
- Error handling: The application does not handle errors that may occur during API requests. Implementing proper error handling and displaying error messages would improve the user experience.

Feel free to contribute to the project by addressing these unsolved problems or adding new features!


