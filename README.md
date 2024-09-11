# yellowsense-assignment
# Job Listings React App

This is a React.js project for a Job Listings application, developed as part of the assignment from **YellowSense Technologies**. The app allows users to view job listings, bookmark jobs for offline viewing, and switch between a "Jobs" and "Bookmarks" section using bottom navigation.

## Features

- **Jobs List**: Fetches jobs from an external API and displays them in a list format.
- **Infinite Scroll**: Allows for loading more jobs as the user scrolls down the page.
- **Bookmarking**: Users can bookmark jobs, which are stored in the browser's local storage for offline viewing.
- **Bottom Navigation**: Users can switch between the "Jobs" and "Bookmarks" tabs.
- **Loading, Error, and Empty States**: The app manages different UI states for loading data, handling errors, and showing empty lists.
  
## Technologies Used

- **React.js**: Frontend framework for building the UI.
- **Local Storage**: Used to persist bookmarked jobs for offline access.
- **CSS**: For styling the application.
  
## API Endpoint

The application fetches jobs from the following API endpoint:
https://testapi.getlokalapp.com/common/jobs?page=1
Functionality
Jobs Section:

Fetches job data from the API.
Infinite scrolling to load more jobs as the user scrolls down.
Displays job title, location, salary, and phone number.
Users can bookmark jobs.
Bookmarks Section:

Displays jobs that users have bookmarked.
Bookmarks are stored in local storage and can be viewed offline.
Bottom Navigation:

Two buttons ("Jobs" and "Bookmarks") to navigate between sections.
