# Razor Labs – Frontend Assignment

A responsive React dashboard for managing and visualizing diagnostic data with interactive charts and real-time updates.


## Features:
1. Diagnostic Table - Display diagnostic entries sorted by date (newest first) and severity (critical → alarm → healthy)
2. Fusion Trend Chart - Interactive line chart showing one data point per day based on most severe diagnostic
3. Add New Diagnostic - Form with validation for creating new diagnostic entries
4. Real-time Updates - Table and chart update immediately when new diagnostics are added
5. Responsive Design - Focused on desktop experience as specified, with basic mobile compatibility


## Assumptions Made:
Design vs Requirements: When there was a conflict between the Zeplin design and the written requirements, I prioritized the written requirements (e.g., sorting logic, tooltip, text)


## Tech Stack:
- React 18 with TypeScript  
- React Testing Library for testing  
- Highcharts for data visualization  
- SCSS for styling  
- Custom hooks for state management  


## Setup Instructions:
### Prerequisites
- Node.js (v16 or higher)  
- npm or yarn  

### Installation
git clone [your-repo-url]
cd razor-lab-assignment

npm install
npm start

### Available Scripts
npm start - Development server
npm test - Run tests
npm run build - Production build