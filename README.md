## Getting Started

### Prerequisites

Run the following command to install dependencies:

```shell
npm install
```

### Environment variables

This project depends on some environment variables.
If you are running this project locally, create a `.env` file at the root for these variables.
Your host provider should included a feature to set them there directly to avoid exposing them.

Here are the required ones:

```
PORT=
API_ENDPOINT=https://v6.exchangerate-api.com/v6/{YOUR_API_KEY_GOES_HERE}/latest
```

### Run the project

Run the following command to run the project:

```shell
npm run dev
```