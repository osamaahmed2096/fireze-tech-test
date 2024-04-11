## About

This is a BE NodeJS service which allows the user to make requests to the exchangerate-api to get the conversions that they are looking for.

## Getting Started

### Prerequisites

Make sure to register a free account on https://www.exchangerate-api.com/docs/free which would then supply you with an API key

Run the following command to install dependencies:

```shell
npm install
```

### Environment variables

This project depends on some environment variables.
If you are running this project locally, copy the `.env.example` file to create an `.env` file at the root for these variables.

Here are the required ones:

```
PORT=
API_ENDPOINT=https://v6.exchangerate-api.com/v6/{YOUR_API_KEY_GOES_HERE}/pair
```

### Run the project

Run the following command to run the project:

```shell
npm run dev
```

### Available Requests

Get request to `/currency-codes` will provide you with an array of available currencies to work with.

Post request to `/conversion-rate` in which you need to include amount, from (currency code to convert from), to (currency code to convert to) in the body, you will then receive the amount converted.