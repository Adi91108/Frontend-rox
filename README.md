### Frontend 
Backend deployed url :[https://roxiler-server.onrender.com/combineddata]

Frontend deployed url:[https://transaction-dashboard-rox.netlify.app/]

Backend github link:[https://github.com/Adi91108/Backend-rox]

#Frontend Task - Project Documentation
Overview:
The frontend task involves creating a single-page application that displays a transactions table, along with bar and pie charts, based on the provided APIs. The user should be able to interact with the table using features like month selection, search functionality, pagination, and data representation through charts.

Features:
1. Transactions Table:
Utilizes the transactions listing API to populate a table.
Month selection dropdown displays January to December as options, with March selected by default.
The table lists transactions of the selected month, independent of the year, using the API.
Search functionality allows filtering transactions by title, description, or price using the API.
Clearing the search box displays the initial list of transactions for the selected month using the API.
"Next" and "Previous" buttons load the next and previous page data from the API.
2. Bar Chart:
Represents data from the transactions API in a bar chart for effective visualization.
Provides insights into transaction data trends and patterns.
3. Pie Chart:
Utilizes data from the transactions API to generate a pie chart for a comprehensive view of transaction distribution.
Enhances understanding of transaction categories.
4. Statistics Modal:
Displays detailed statistics for the selected month.
The modal provides a deeper analysis of transaction data for better insights.
Implementation Steps:
Integration with APIs:

Connects with the provided transactions API to fetch and display transaction data.
Utilizes the API for month-wise filtering, search functionality, and pagination.
Transactions Table Component:

Creates a responsive and user-friendly table component.
Implements month selection, search box, pagination, and dynamic data loading using API.
Bar Chart Component:

Develops a component to visualize transaction data in a bar chart format.
Integrates with the transactions API to dynamically update the chart.
Pie Chart Component:

Implements a component for rendering transaction data in a pie chart.
Fetches data from the transactions API for dynamic chart updates.
Statistics Modal Component:

Creates a modal component for displaying detailed statistics.
Fetches additional data from the API for statistical analysis.
Styling and UI/UX:

Designs an intuitive and visually appealing user interface.
Implements responsive design for optimal user experience across devices.

Conclusion:
The frontend task aims to create a seamless and visually appealing user interface for displaying transaction data. The implementation follows best practices for user experience and effective data representation through charts and statistics. The project enhances the overall understanding of transactional data and encourages user engagement.


