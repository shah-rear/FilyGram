import { Client, Account, Databases, Storage, Avatars } from "appwrite";


const appwriteConfig = {
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    url: String(import.meta.env.VITE_APPWRITE_URL),
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

// console.log(appwriteConfig.projectId);
// console.log(appwriteConfig.url);


export const client = new Client();


// client.setEndpoint('https://cloud.appwrite.io/v1');
// client.setProject('65760f29c0e065608ea7');

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);


export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

export default appwriteConfig;
