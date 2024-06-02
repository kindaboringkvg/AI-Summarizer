# AI Summarizer

## Overview
AI Summarizer is a web application designed to help users quickly summarize articles. By simply pasting the link of the article into the search box, users can generate a summary of the content. The application also stores previously searched summaries, allowing users to revisit them anytime.

## Features
- **Article Summarization**: Input an article link and receive a concise summary.
- **Search History**: Keeps track of your previously searched summaries for easy access.

## Technologies Used
### React + Vite
This project is built using React and Vite, offering a minimal setup with Hot Module Replacement (HMR) and some ESLint rules.

- **@vitejs/plugin-react**: Utilizes Babel for Fast Refresh.
- **@vitejs/plugin-react-swc**: Utilizes SWC for Fast Refresh.

### Netlify
The application is deployed on Netlify. You can visit the live site using the following link:
[AI Summarizer on Netlify](https://main--chic-truffle-fe1690.netlify.app/)

## Installation and Setup
1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/AI-Summarizer.git
    cd AI-Summarizer
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm run dev
    ```

4. **Build for production:**
    ```sh
    npm run build
    ```

5. **Preview the production build:**
    ```sh
    npm run preview
    ```

## Deployment
To deploy the application, you can use Netlify. If you want to deploy it yourself, follow these steps:
1. **Login to Netlify** and create a new site.
2. **Link your GitHub repository** with Netlify.
3. **Configure build settings**:
    - Build Command: `npm run build`
    - Publish Directory: `dist`
4. **Deploy the site** and your application will be live.

## Future Thoughts
In future iterations, I plan to add a payment gateway to transform this application into a SaaS business. This will allow users to subscribe and access premium features.

## Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions or improvements.

## Contact
For any inquiries, please contact me at karam.veer00@gmail.com.
