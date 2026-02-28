# 🤖 AI Chat Application

A modern, real-time chat application powered by Google's Gemini AI. Built with React and Vite for a fast, responsive user experience.

## ✨ Features

- **Real-time AI Conversations**: Chat directly with Google's Gemini 2.5 Flash model
- **Smooth Message Scrolling**: Auto-scroll to the latest messages for better UX
- **Responsive Design**: Clean interface with distinct styling for user and AI messages
- **Fast Development**: Built with Vite for rapid development and lightning-fast builds
- **Easy Setup**: Simple configuration with environment variables

## � Preview

![AI Chat Application](images/screenshot.png)

## �🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: CSS (Modular CSS components)
- **HTTP Client**: Axios
- **AI API**: Google Generative AI (Gemini)
- **Linting**: ESLint 9
- **Package Manager**: npm

## 📋 Project Structure

```
ai-chat/
├── src/
│   ├── components/
│   │   ├── ChatWindow.jsx      # Displays conversation messages
│   │   ├── ChatInput.jsx       # Input field with send button
│   │   └── Sidebar.jsx         # Sidebar navigation component
│   ├── css/
│   │   └── ChatInput.css       # Styling for chat input
│   ├── App.jsx                 # Main application component
│   └── main.jsx                # React entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint rules
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Google API key for Gemini API access

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ai-chat
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create or update the `.env` file in the project root:

   ```env
   VITE_GEMINI_API_KEY=your_google_api_key_here
   ```

   To get your API key:
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create a new API key
   - Copy and paste it into the `.env` file

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or the port shown in your terminal)

## 📖 Usage

1. Open the application in your browser
2. Type a message in the chat input at the bottom
3. Press **Enter** or click the **Gönder** (Send) button
4. The AI will respond with a generated message
5. Continue the conversation naturally

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🔧 Component Overview

### App.jsx

The main component that:

- Manages conversation state with useState
- Handles message sending via `handleSendMsg`
- Makes API requests to Google's Generative AI
- Renders Sidebar, ChatWindow, and ChatInput components

### ChatWindow.jsx

Displays all messages with:

- Auto-scrolling to the latest message
- Different styling for user (blue) and AI (gray) messages
- Smooth scroll behavior

### ChatInput.jsx

Provides message input functionality:

- Text input field
- Send button
- Enter key support for quick sending
- Input clearing after message submission

### Sidebar.jsx

Navigation component for future expansion

## 🔐 Security Notes

- **API Key Protection**: Never commit `.env` file to version control
- **Environment Variables**: Use `VITE_` prefix for client-side environment variables in Vite
- **.gitignore**: Ensure `.env` is listed in `.gitignore`

## 🐛 Error Handling

The application includes basic error handling for API requests:

- API errors are logged to the browser console
- Failed requests don't crash the application
- Users are informed of issues (can be enhanced with toast notifications)

## 🚧 Future Improvements

- [ ] Add conversation history/persistence
- [ ] Implement chat session management
- [ ] Add typing indicators while AI is responding
- [ ] Support for multiple conversation threads
- [ ] User authentication
- [ ] Message editing and deletion
- [ ] Voice input/output support
- [ ] Theme customization (dark/light mode)
- [ ] Better error notifications (toast/alerts)
- [ ] Message search functionality

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📞 Support

For issues or questions:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce
