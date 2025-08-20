# Luhn Credit Card Checker

This project is a mini application that checks the validity of credit card numbers using the Luhn algorithm. It consists of a FastAPI backend and a React frontend.

## Project Structure

```
luhn-credit-card-checker
├── backend
│   ├── app
│   │   ├── main.py
│   │   └── luhn.py
│   ├── requirements.txt
│   └── README.md
├── frontend
│   ├── src
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── components
│   │       └── CreditCardChecker.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Backend

The backend is built using FastAPI. It provides an API endpoint to validate credit card numbers.

### Setup Instructions

1. Navigate to the `backend` directory.
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run the FastAPI application:
   ```
   uvicorn app.main:app --reload
   ```

### API Usage

- **POST /validate**: Validates a credit card number.
  - Request Body:
    ```json
    {
      "card_number": "string"
    }
    ```
  - Response:
    ```json
    {
      "is_valid": true
    }
    ```

## Frontend

The frontend is built using React with TypeScript. It provides a user interface for inputting credit card numbers and displays the validation result.

### Setup Instructions

1. Navigate to the `frontend` directory.
2. Install the required dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## Usage

Open your browser and navigate to `http://localhost:3000` to access the application. Input a credit card number and click the validate button to see if it is valid according to the Luhn algorithm.