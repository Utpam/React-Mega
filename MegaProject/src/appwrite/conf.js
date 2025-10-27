import config from "../config/config";
import { Client, ID, Databases, Storage, Query, TablesDB } from "appwrite"

export class Service {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.projectId);
        this.databases = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    // Code from CHAI AUR CODE


    async createPost({title, slug, content, featuredImage, status, userId}) {
        try {
            return await this.databases.createDocument(
                config.databaseId, config.tableId, slug, {
                    title, slug, content, featuredImage,status,userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    // Code from DOCUMENTATION APPWRITE

    // async createPost({title, slug, content, featuredImage, status, userId}) {
    //     try {
    //         return await this.databases.createRow(
    //             config.databaseId, config.tableId, slug, {
    //                 title, slug, content, featuredImage,status,userId
    //             }
    //         )
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // Code from CHAI AUR CODE

    async updatePost(slug, {title,  content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.databaseId, config.tableId, slug, {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            throw error
        }
    }

    // Code from DOCUMENTATION APPWRITE

    // async updatePost(slug, {title,  content, featuredImage, status}) {
    //     try {
    //         return await this.databases.updateRow(
    //             config.databaseId, config.tableId, slug, {
    //                 title, content, featuredImage, status
    //             }
    //         )
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // Code from CHAI AUR CODE

    async deletePost(slug) {
        try{
            await this.databases.deleteDocument(
                config.databaseId, config.tableId, slug
            )
            return true
        }
        catch (error) {
            console.error('Error')
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.databaseId, config.tableId, slug)
        } catch (error) {
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.databaseId,
                config.tableId,
                queries 
            )
        } catch (error) {
            return false
        }
    }

    // File Upload Services

    async uploadFile(file) {
        try {
            return await this.bucket.createFileToken(
                config.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.error('error')
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.bucketId,
                fileId
            )
        } catch (error) {
            console.error('error')
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.bucketId,
            fileId
    )}
}

const service = new Service

export default service