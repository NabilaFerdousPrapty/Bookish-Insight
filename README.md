# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Netlify Live Link:https://bookish-insight-web-book-review.netlify.app/



# Bookish Insight

Bookish Insight is a dynamic and feature-rich book review website built using React. It provides users with a seamless experience for discovering, reviewing, and organizing their favorite books. This README file outlines the key features, functionalities, and setup instructions for the Bookish Insight project.

## Table of Contents
1. [Overview](#overview)
2. [Key Features](#key-features)
3. [Setup Instructions](#setup-instructions)
4. [Folder Structure](#folder-structure)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)

## Overview
Bookish Insight is a web application designed to cater to book enthusiasts who enjoy reading, reviewing, and organizing books. It offers a user-friendly interface with intuitive navigation and interactive features. The website includes various pages such as Home, Listed Books, Pages to Read, All Reviews, Subscribe Us, and dynamic routes for Book Details and Read Page.

## Key Features
- **Navbar**: A persistent navigation bar with the website name and menu items for easy access to different sections of the website. The active route is highlighted for user convenience.

- **Banner Section**: A visually appealing banner section displaying a title and a button to view the listed books page. Clicking the button redirects users to the Listed Books page.

- **Book Cards**: The website showcases book cards arranged according to Figma specifications. Each card includes essential information such as image, tags, book name, author, category, and rating.

- **Book Details Page**: Dynamic route for viewing detailed information about a book. It includes the book's image, name, author, category, review, tags, total pages, publisher, year of publishing, and rating. Users can add the book to their read list or wishlist from this page.

- **Read and Wishlist Functionality**: Users can add books to their read list or wishlist. Clicking the "Read" or "Wishlist" button adds the book to local storage, and appropriate toast messages are displayed to provide feedback. Users cannot add the same book to both lists.

- **Listed Books Page**: Displays all the books added to the read list and wishlist. Users can sort the books by rating, number of pages, or published year. The page includes tabs for viewing read and wishlist books separately.

- **Custom Shape Bar Chart**: Implemented on the Read page to visualize the total pages of read-listed books against their names.

- **404 Page**: Custom 404 route for handling page not found errors.

- **Responsive Design**: The website is responsive and optimized for desktop, tablet, and mobile devices.

- **Data Fetching**: Reviews data fetched from a local JSON file with a loading spinner for better user experience.

- **Subscription Plans**: Subscribe Us page displays subscription plans with features and prices statistics of the last month, along with the Google Play app icon.

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and visit `http://localhost:3000` to view the website.

## Folder Structure
```
bookish-insight/
│
├── public/
│   ├── index.html
│   └── ...
│
└── src/
    ├── components/
    │   ├── AllBooks.js
    │   ├── Banner.js
    │   ├── Loader.js
    │   ├── BookDetails.js
    │   ├── Read.js
    │   ├── Wishlist.js
    │   ├── Review.js
    │   └── ...
    │
    ├── data/
    │   ├── books.json
    │   └── reviews.json
    │
    ├── Pages/
    │   ├── Error.js
    │   ├── Home.js
    │   ├── Reviews.js
    │   ├── Shared.js
    │   ├── PagesToRead.js
    │   ├── SubscribeToUs.js
    │   ├── SingleBookDetail.js
    │   └── ...
    │
    ├── MainLayout.js
    ├── main.js
    └── ...
```

## Technologies Used
- React
- JavaScript (ES6+)
- HTML5
- CSS3 (with Flexbox and Grid)
- Local Storage

## Contributing
Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to improve the Bookish Insight project.

## License
This project is licensed under the [MIT License](LICENSE).

---
Feel free to reach out if you have any questions or need further assistance. Happy reading with Bookish Insight! 📚✨

