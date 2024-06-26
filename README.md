# Icon Picker Component

This project implements an icon picker component in React, allowing users to select icons from the Feather Icons library. The selected icon is displayed in a designated area after selection.

## Features

- Opens an icon picker when a small div is clicked.
- Displays icons from the Feather Icons library.
- Supports pagination for icons that cannot fit on the current page.
- Allows selection of an icon which is then displayed in the main div.
- Responsive design with support for different screen sizes.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sakshamwithweb/icon-picker.git
   ```

2. Navigate into the project directory:

   ```bash
   cd icon-picker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Click on the main box to open the icon picker.
- Select an icon from the picker to see it displayed in the main box.
- Confirm icon change if prompted with a confirmation modal.

## Technologies Used

- React
- Feather Icons
- CSS (for styling)

## Folder Structure

```
icon-picker/
│
├── public/           # Static assets and HTML template
│
├── src/              # Source files
│   ├── App.js        # Main application component
│   ├── picker.js     # Icon picker component
│   └── App.css       # Styles for the application
│
├── README.md         # Project overview and instructions
├── package.json      # Project dependencies and scripts
└── .gitignore        # Files and directories ignored by Git
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.
