# ItemOne

This project provides an API for managing items, including fetching and adding items. It is built with **Spring Boot** for the backend, **React** for the frontend, and uses **PostgreSQL** for the database.

## Features

- **Fetch all items**: Retrieve a list of all items stored in the backend.
- **Add a new item**: Add a new item to the list.
- **CORS enabled**: Configured to allow frontend applications from `http://localhost:3000`.

## Technologies Used

- **Spring Boot** - Backend framework.
- **Java** - Programming language.
- **PostgreSQL** - Database used for storing item data.
- **React** - Frontend framework.
- **RESTful API** - Standard for API communication.
- **CORS (Cross-Origin Resource Sharing)** - Configured to allow interaction from the frontend.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Java 8 or higher
- Spring Boot
- Maven or Gradle
- PostgreSQL
- Node.js and npm (for React frontend)


##Setup Database (PostgreSQL):

spring.datasource.url=jdbc:postgresql://localhost:5432/item_management_db
spring.datasource.username=your-username
spring.datasource.password=your-password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

![Screenshot (138)](https://github.com/user-attachments/assets/2c957177-a388-4266-8674-7574876c3ecf)
![Screenshot (137)](https://github.com/user-attachments/assets/ea18306c-b5de-45a1-aed4-99b41cd3f38b)


### Clone the Repository

```bash
git clone https://github.com/prashant42-coder/ItemOne.git

