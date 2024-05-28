Vanity Number Generator
Overview
The Vanity Number Generator is a simple web application that allows users to generate vanity numbers based on their phone numbers. It consists of a backend Lambda function written in Node.js, an HTML front end, and associated JavaScript files.

Features
Vanity Number Generation: Converts input phone numbers into vanity numbers.
Simple Web Interface: Provides a user-friendly interface for entering phone numbers and displaying generated vanity numbers.
AWS Lambda Backend: Utilizes AWS Lambda for serverless computation to generate vanity numbers.
Test Suite: Includes Jest test cases to ensure the functionality of the backend Lambda function.
Project Structure
The project is organized as follows:

lambda/: Contains the Lambda function code (vanityNumberGenerator.js) responsible for generating vanity numbers.
index.html: HTML file for the web interface.
index.js: JavaScript file for client-side functionality.
test/: Directory for Jest test cases.
README.md: Documentation for the project.
Prerequisites
Before running the application, ensure you have the following:

Node.js installed on your local machine.
AWS account credentials configured locally or through environment variables.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/devi-sistem/ttech.git
Install dependencies:

bash
Copy code
cd vanity-number-generator
npm install
Deploy the Lambda function using AWS SAM (Serverless Application Model):

bash
Copy code
sam build
sam deploy --guided
Open index.html in a web browser to access the Vanity Number Generator interface.

Usage
Enter your phone number in the input field.
Click the "Generate Vanity Numbers" button.
View the generated vanity numbers displayed on the screen.
Testing
To run the Jest test suite for the Lambda function:

bash
Copy code
npm test
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, please contact Devidayal Kushwaha Mob 9953485046.
