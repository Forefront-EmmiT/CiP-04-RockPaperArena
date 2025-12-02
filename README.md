# CiP-04-RockPaperArena

# RockPaperArena

## Project Setup

This project consists of two main parts:

1. **Backend**: A Node.js server built with TypeScript and Express.
2. **Frontend**: A React application created with Next.js.
3. **Database**: MariaDB

The entire application is containerized using Docker and orchestrated with Docker Compose for easy development and deployment.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Docker**
- **Docker Compose**

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

````env
# Database Configuration
DB_HOST=mariadb
DB_PORT=3306
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_ROOT_PASSWORD=your_db_root_password

---

## Starting the Application

### Steps:
1. Clone the repository and navigate to the project directory:
   ```bash
   cd CiP-04-RockPaperArena
````

2. Ensure your `.env` file is configured with the correct database credentials.

3. Build and start all services:

   ```bash
   docker-compose up --build
   ```

4. The services will start on the following ports:
   - **Frontend**: `http://localhost:3000`
   - **Backend**: `http://localhost:5000`
   - **Database**: `localhost:3306` (internal to containers)

---
