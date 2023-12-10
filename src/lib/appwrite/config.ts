import { Client, Account, Databases, Storage, Avatars} from 'appwrite';

export const appwriteConfig = {
    projectID: import.meta.env.VITE_APPWRITE_APP_ID,
    url: import.meta.env.VITE_APPWRITE_APP_URL,
}

export const client = new Client();
client.setProject(appwriteConfig.projectID);  
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);



// export const account = new Account(client);
// export { ID } from 'appwrite';


// 65760f29c0e065608ea7