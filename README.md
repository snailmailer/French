# Le Français - French Learning Website

A comprehensive, interactive web application for learning French, built with React, TypeScript, and Vite.

## 🚀 Live Website
Access the live application here: **[Le Français](https://snailmailer.github.io/French/)**

## 📖 User Guide

### 1. The Conjugation Tool
Accessible via the **Green Button** in the top navigation bar.
- **Search**: Type any verb (e.g., *manger*, *être*, *se lever*) to see its full conjugation.
- **Filters**: Quickly find verbs by **Category** (Work, Hobbies), **Group** (-ER, -IR, -RE), or **Tense** (Présent, Passé Composé, etc.).
- **Tenses**: View conjugations for all moods (Indicatif, Subjonctif, Conditionnel, Impératif, Participe).
- **Gérondif**: The Gérondif form (e.g., *en mangeant*) is displayed for every verb.
- **Audio**: Click the **Speaker Icon** next to any conjugation to hear the pronunciation.
- **Rules & Notes**: Automatically updates to show specific rules for the selected verb (e.g., stem changes).
- **Examples**: See sample sentences with translations for key verbs.

### 2. Speaking Practice
A dedicated tool to practice pronunciation and speaking, tailored for TEF/TCF exams.
- **Question Categories**: Practice speaking on various topics like Home, Work, and Travel.
- **Exam Practice**: Simulate real exam scenarios with timers and structured tasks.
- **CEFR Level Guide**: Access a detailed guide to help you understand the requirements for each level.

### 3. Features & Resources
- **Waffle Menu**: Toggle the waffle menu (grid icon) in the top-left to quickly access different sections like **Resources**, **Conjugation Tool**, and **Speaking Practice**.
- **Resources Page**: A curated list of external tools (dictionaries, news, culture) to supplement your learning.

### 4. Integrated Audio (Text-to-Speech)
- **Pronunciation**: Click the speaker icon 🔊 next to vocabulary lists, conjugation tables, or examples to hear the correct French pronunciation.
- **Mobile Friendly**: The audio is optimized to work smoothly on mobile devices.

### 5. Grammar & Vocabulary
Each level contains detailed sections on:
- **Vocabulary Lists**: Grouped by topic (e.g., Food, Travel).
- **Grammar Rules**: Explanations with examples (e.g., *Passé Composé vs Imparfait*).
- **Pronouns**: Comprehensive guides on COD, COI, y, en, and more.

---

## 🛠️ For Developers

### Prerequisites
- Node.js (v16+)
- npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/snailmailer/French.git
   ```
2. Navigate to the project directory:
   ```bash
   cd French
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open your browser to `http://localhost:5173/French/`.

### Building for Production
To build the project for deployment:
```bash
npm run build
```
The output will be in the `dist` directory.

### Deployment
This project is configured for GitHub Pages.
1. Commit your changes.
2. Push to the `main` branch.
3. The GitHub Action (if configured) or manual deployment will publish the `dist` folder to the `gh-pages` branch.

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
