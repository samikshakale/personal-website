import uiUxOne from "./assets/ui-ux-project-one.svg";
import uiUxTwo from "./assets/ui-ux-project-two.svg";
import uiUxThree from "./assets/ui-ux-project-three.svg";
import webOne from "./assets/web-project-one.jpeg";
import webTwo from "./assets/web-project-two.jpeg";
import webThree from "./assets/web-project-three.jpeg";
import chromeExtension from "./assets/chrome_extension.png";
import tableauDashboard from "./assets/tableau_dashboard.png";
import githubStats from "./assets/github_stats.png";
import creditCard from "./assets/credit_card.png";
import movieReview from "./assets/movie_review.png";
import othello from "./assets/othello.png";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
  description: string;
  tech: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "frontend",
    img: chromeExtension,
    title: "Chrome Extension",
    link: "https://medium.com/@samikshakale_19899/llm-powered-autofill-chrome-extension-for-aiid-incident-reporting-a2f4b305702b",
    description: "LLM-powered autofill browser extension for AIID incident report form",
    tech: "Javascript, HTML/CSS, Python, Flask",
  },
  {
    id: 1,
    category: "frontend",
    img: tableauDashboard,
    title: "Interactive Dashboard",
    link: "https://github.com/samikshakale/student-loan-complaint-dashboard",
    description: "Geospatial interactive Tableau dashboard visualizing key CFPB student loan complaints data KPIs and trends",
    tech: "Tableau, AWS",
  },
  {
    id: 2,
    category: "frontend",
    img: githubStats,
    title: "Github User Stats",
    link: "https://github.com/samikshakale/github-user-stats",
    description: "API endpoint using github's search API to retrieve aggregated statistics across a user's repositories",
    tech: "Javascript, HTML/CSS, Python, Flask",
  },
  {
    id: 3,
    category: "aiml",
    img: creditCard,
    title: "Kaggle Amex Default Prediction",
    link: "https://github.com/samikshakale/kaggle-amex-default-predicton",
    description: "XGBoost model that predicts future default using customer's monthly profile",
    tech: "Python, Sci-Kit Learn, Pandas",
  },
  {
    id: 4,
    category: "aiml",
    img: movieReview,
    title: "Movie Review Sentiment Analysis",
    link: "https://github.com/samikshakale/IMDB-Reviews-SentimentAnalysis-BERT",
    description: "Sentiment classification of imdb movie review using Google's state-of-the-art embedding model - BERT",
    tech: "Python, Pytorch, Transformers",
  },
  {
    id: 5,
    category: "aiml",
    img: othello,
    title: "Othello AI",
    link: "https://github.com/samikshakale/Othello-AI",
    description: "AI that plays Othello using minimax with alpha-beta pruning and proprietary heuristics",
    tech: "Python",
  },
];
