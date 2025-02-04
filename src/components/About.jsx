import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="text-center">Welcome to the Photo Management App!</h1>
      <p className="text-center">
        This application is designed to display a collection of photos in a grid layout with a responsive and user-friendly interface. Users can view photos, navigate to detailed views, and add new photos effortlessly. The project is built using React.js and incorporates various features to enhance the user experience.
      </p>
      <p><b>Note: *This project contains my personal images. Viewers can also add images and delete existing ones. Please be considerate and avoid deleting my personal images.*</b></p>

      <h2>Features</h2>
      <ul>
        <li><strong>Photo Gallery:</strong> Displays a grid of photos, each with a title and image.</li>
        <li><strong>Responsive Design:</strong> Adjusts seamlessly to different screen sizes, ensuring a smooth experience on both desktop and mobile devices.</li>
        <li><strong>Add New Photos:</strong> Users can navigate to the "Create" page to upload and add new photos.</li>
        <li><strong>Photo Details:</strong> Clicking on a photo allows users to view it in detail on a separate page.</li>
      </ul>

      <h2>Technologies Used</h2>
      <ul>
        <li><strong>React.js:</strong> For building the user interface and managing state.</li>
        <li><strong>React-Window:</strong> Efficiently renders large lists of images.</li>
        <li><strong>Axios:</strong> Handles HTTP requests for fetching and deleting photos.</li>
        <li><strong>CSS:</strong> Styles the application and ensures a responsive layout.</li>
        <li><strong>Cloudinary:</strong> Manages and serves images efficiently.</li>
      </ul>

      <h2>Frontend</h2>
      <ul>
        <li>Created an upload page where users can upload photos along with a title and description. Users can drag and drop or select the image from their file manager.</li>
        <li>Designed a gallery page displaying all uploaded photos in a visually appealing format.</li>
        <li>Implemented a detail page where users can view specific photo details. Users can also navigate to previous or next photos within the detail view.</li>
      </ul>

      <h2>Backend</h2>
      <ul>
        <li>Uploaded images are stored using an external storage service called <strong>Cloudinary</strong>.</li>
        <li>Fetched images from Cloudinary and displayed them dynamically on the gallery page.</li>
        <li>Users can delete images from both the detail page and the gallery page.</li>
        <li>Users can edit the title and description of their uploaded photos from the details page after uploading them.</li>
      </ul>
      <h2>GitHub Link</h2>
      <ul>
        <li>Link: <a href="https://github.com/Tamilkumaran17/Photo-Management-App" target="_blank" className="git-link">Photo management app</a></li>
      </ul>
       <footer className="about-footer">
        <p> <b>Contact Me:</b></p>
        <a href="https://www.linkedin.com/in/tamilkumarann/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <p>Phone: +91 90250 15881</p>
        <p>Email: tamilkumaran1494@gmailcom</p>
      </footer>
    </div>
  );
};

export default About;
