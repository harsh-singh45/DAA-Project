# Luhn Credit Card Checker Backend

This backend service is built using FastAPI and implements the Luhn algorithm to validate credit card numbers.

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/luhn-credit-card-checker.git
   cd luhn-credit-card-checker/backend
   ```

2. **Create a virtual environment (optional but recommended):**
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install the required dependencies:**
   ```
   pip install -r requirements.txt
   ```

4. **Run the FastAPI application:**
   ```
   uvicorn app.main:app --reload
   ```

5. **Access the API documentation:**
   Open your browser and navigate to `http://127.0.0.1:8000/docs` to view the interactive API documentation.

## API Usage

### Validate Credit Card Number

- **Endpoint:** `POST /validate`
- **Request Body:**
  ```json
  {
    "card_number": "string"
  }
  ```
- **Response:**
  - **200 OK**: Returns a JSON object indicating whether the credit card number is valid.
    ```json
    {
      "is_valid": true
    }
    ```
  - **400 Bad Request**: If the input is invalid.

## Luhn Algorithm

The Luhn algorithm is implemented in `app/luhn.py`. It provides a function `validate_credit_card` that checks if a given credit card number is valid.

## License

This project is licensed under the MIT License.