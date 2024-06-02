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

2. **Install Vite:**
    Vite is a fast build tool that is essential for modern web development, especially with frameworks like React.
    ```sh
    npm install vite
    ```

3. **Create a new Vite project:**
    This command initializes a new Vite project with the latest setup.
    ```sh
    npm create vite@latest
    ```

4. **Install project dependencies:**
    ```sh
    npm install
    ```

5. **Install Tailwind CSS and its dependencies:**
    Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
    ```sh
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    ```

6. **Start the development server:**
    This command starts the Vite development server, allowing you to see your changes in real time.
    ```sh
    npm run dev
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

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact
For any inquiries, please contact me at [your-email@example.com](mailto:your-email@example.com).
