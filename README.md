# Mini Message Board

A dynamic message board application featuring an interactive card slider and glass morphism design. Users can post messages, view feedback, and interact with a beautiful carousel-style interface.

<img width="1672" alt="Screenshot 2024-12-28 at 18 43 13" src="https://github.com/user-attachments/assets/56da8c46-f4ce-4bf6-af90-58f7befd3ee1" />

<img width="1672" alt="Screenshot 2024-12-28 at 18 43 51" src="https://github.com/user-attachments/assets/132ab6b5-bdf9-4188-b585-a41042bdeefd" />

## Features

- Interactive card slider with smooth animations
- Glass morphism UI design with gradient background
- Form submission for new messages/feedback
- Real-time message display
- Responsive design
- Auto-rotating carousel with hover pause
- Click navigation between cards
- Optional fields for email and topic categorization

## Tech Stack

- **Backend**: Node.js with Express
- **View Engine**: EJS (Embedded JavaScript)
- **Frontend**: Vanilla JavaScript
- **Styling**: Custom CSS with glass morphism effects
- **Logging**: Morgan for HTTP request logging<img width="1672" alt="Screenshot 2024-12-28 at 18 43 13" src="https://github.com/user-attachments/assets/9efcc1cf-8cc0-4235-9b35-646b0faf008e" />


## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd mini-message-board
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node app.js
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

```
mini-message-board/
├── app.js                 # Main application file
├── public/               # Static files
│   ├── styles.css        # Styling
│   └── scripts.js        # Frontend JavaScript
├── views/                # EJS templates
│   ├── index.ejs         # Home page with slider
│   └── form.ejs          # New message form
└── package.json          # Project dependencies
```

## Usage

### Viewing Messages

- Visit the home page to see the message carousel
- Hover over cards to see them scale up
- Click on cards to focus them
- Messages auto-rotate every 4 seconds

### Posting New Messages

1. Click the "Give Feedback" button
2. Fill out the required fields:
   - Username
   - Message
3. Optional fields:
   - Email
   - Topic (General, Feedback, Help)
4. Submit to see your message appear in the carousel

## Customization

### Styling
You can modify the appearance by editing `public/styles.css`:
- Background gradient colors
- Card transparency
- Animation timing
- Hover effects

### Card Layout
Adjust card content in `views/index.ejs`:
- Add new fields
- Modify layout
- Change animation behavior

## Development

To modify the project:

1. Start the server with nodemon (if installed):
```bash
nodemon app.js
```

2. Edit files:
- `app.js` for backend logic
- `views/*.ejs` for templates
- `public/styles.css` for styling
- `public/scripts.js` for frontend behavior

3. The server will automatically restart on changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by modern UI/UX design principles
- Uses glass morphism design trend
- Built with Node.js and Express framework

## Troubleshooting

**Messages not appearing?**
- Check if form submission includes required fields
- Verify server is running
- Check browser console for errors

**Slider not animating?**
- Ensure JavaScript is enabled
- Verify scripts.js is properly loaded
- Check for console errors

## Support

For support, please:
1. Check existing issues
2. Create a new issue with:
   - Description of the problem
   - Steps to reproduce
   - Expected behavior
   - Screenshots if applicable
