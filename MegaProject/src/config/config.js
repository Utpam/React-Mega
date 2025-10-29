// This is used in production because If some if is all numbers it can treat is as a integer but env should always be a string so se convert all the keys to string

const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
    rteApiKey: String(import.meta.env.VITE_YOUR_TINYMCE_API_KEY)
}

export default config