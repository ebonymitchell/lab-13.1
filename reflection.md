# Lab 1: Connecting a Database

## Reflection Questions

### 1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (`0.0.0.0/0`)?

    Whitelisting IP addresses limits database connections to approved IP addresses. Allowing connections from anywhere increases the risk of unauthorized access and security attacks.

### 2. What is the purpose of the `dotenv` package? What other methods could you use to manage environment variables in a production environment?

    The `dotenv` package loads environment variables from a `.env` file so sensitive information, like database credentials, isn't hardcoded into the application. In production, I could set environment variables directly through my hosting platform instead of using a local `.env` file.

### 3. If your application failed to connect, what are the first few steps you would take to debug the issue?

    I would check my connection string, make sure my `.env` file is loading correctly, and verify my database credentials and network access settings. I would also check the terminal for error messages to help identify the problem.
