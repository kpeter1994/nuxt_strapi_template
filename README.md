# Nuxt Strapi Starter for Static Websites

### Step 1: Set Up Environment Variables
Copy and rename the `.env.example` file to `.env` in the `backend` folder. This file contains the required environment variables.

### Step 2: Install Dependencies
Run the following command in the root directory to install the dependencies:
```bash
npm install
```

### Step 3: Set Up Strapi Admin Interface
Access the Strapi admin interface and create an admin user. Set the public permissions for the `article` entity to `find` and `findOne`.

### Step 4: Start the Project
To start the project, run the following command in the root directory:
```bash
npm run start
```
This will start both the backend and frontend services.