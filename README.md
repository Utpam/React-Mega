'''
# React Blog App with Appwrite

A full-stack blog platform built with **React**, **Redux**, **Appwrite** (Database, TablesDB, Storage, and Auth), and **TinyMCE** for rich text editing.

## Features

- User authentication (sign up, login, logout) with Appwrite Auth
- Create, edit, view, and delete blog posts
- Support for featured images (Appwrite Storage)
- Rich text editor (TinyMCE) for post content
- Post visibility control (active/inactive)
- Route-based protection for authenticated and public pages (with React Router v6)
- Responsive design with Tailwind CSS

---

## Tech Stack

- **Frontend:** React, react-router-dom, Redux Toolkit, react-hook-form, html-react-parser, TinyMCE
- **Backend:** Appwrite (cloud.appwrite.io - Database, TablesDB, Storage, Auth)
- **Styling:** Tailwind CSS

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-blog-app.git
   cd your-blog-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up your environment variables:**
   - Copy `config/config.example.js` to `config/config.js` and fill in your Appwrite project values:
     ```js
     export default {
       appwriteUrl: "https://<REGION>.cloud.appwrite.io/v1",
       projectId: "<PROJECT_ID>",
       databaseId: "<DATABASE_ID>",
       tableId: "<TABLE_ID>",       // e.g. "articles"
       bucketId: "<BUCKET_ID>",     // Storage
     }
     ```

4. **Start the development server:**
   ```bash
   npm start
   ```

---

## Appwrite Setup

1. **Sign up at [Appwrite Cloud](https://cloud.appwrite.io/) and create a new project.**
2. **Enable and configure the following:**
   - **Database:** Create a database and a table (e.g. `articles`) with these fields:
     - `title` (string, required)
     - `slug` (string, required, unique)
     - `content` (string, required)
     - `status` (enum/string, required: "active"/"inactive")
     - `featuredImage` (string, required: stores file ID from Storage)
     - `userID` (string, required: stores user’s $id from Appwrite Auth)
   - **Storage:** Create a bucket (for post images), ensure permissions allow file uploads.
   - **Auth:** Enable email/password authentication.

3. **Set correct permission rules** so users can only edit/delete their own posts and storage, or set public read as desired for images/posts.

---

## Usage

- **Sign up, log in, and create posts.**
- **Posts require a title, slug, content, featured image, and status.**
- **Featured images are uploaded to Appwrite Storage and displayed on post cards and detail pages.**
- **Only post owners can edit or delete their posts.**

---

## Project Structure

- `src/components/` – All reusable and layout components
- `src/pages/` – Page components (Home, Login, SignUp, AddPost, AllPosts, Post, EditPost)
- `src/appwrite/` – All Appwrite configuration and service logic
- `src/config/` – Appwrite config/constants

---

## Contributing

Pull requests are welcome! For significant changes, please open an issue first.

---

## License

[MIT](LICENSE)
'''
