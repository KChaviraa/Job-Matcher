# Job Matcher 🎯

Web application built with Next.js and React that helps users find their dream jobs faster. By simply entering their skills, users can instantly filter through a list of available roles to find the perfect match for their unique expertise.

## ✨ Features

- **Dynamic Skill Filtering**: Enter your skills to instantly see which jobs match your qualifications.
- **Flexible Match Modes**: 
  - *Stricter (All Skills Required)*: Only shows jobs where you meet 100% of the requirements.
  - *Flexible (Any Skill Matches)*: Shows any job where you meet at least one of the requirements.
- **Real-time Search**: Instant visual feedback as you add or remove skills.
- **Modern UI/UX**: 
  - Beautiful glassmorphic design elements.
  - Smooth animations and transitions.
  - Responsive grid layout for job cards.
- **Visual Match Indicators**: Job cards clearly highlight which of your skills align with the role's requirements.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://reactjs.org/)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (with CSS variables & modern animations) / Tailwind CSS

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/your-username/job-tracker.git
   ```
2. Navigate into the directory
   ```sh
   cd job-tracker
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

- `src/app/` - Next.js App Router pages and global layouts.
- `src/components/` - Reusable React components (`JobCard`, `SkillInput`, etc.).
- `src/data/` - Mock job data used for demonstration.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
