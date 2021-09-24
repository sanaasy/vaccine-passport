// this the service function for all the get requests and responses
import { UserModel } from "../../models/user-model";
import { db } from "../../app"
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../Types/user'


// this is for the post request to get all user data
export const PostUser = async (request: any) => {

    const newUser = new UserModel(request);

    if (newUser._id === undefined) {
        const id: string = uuidv4().toString().replace("-", "") as any;
        newUser._id = id;
    }
    const findUserExists = await db.collection('Users').findOne({ newUser });

    if (findUserExists === undefined || findUserExists === null) {

        console.log(`database is empty`);

        const sendfirstUser = await db.collection('Users').insertOne(newUser as User);

        return sendfirstUser;

    } else if (findUserExists !== undefined && findUserExists.insertedId === true) {
        console.log(`this ${newUser} already exists in database`)
        return;
    } else {

        const sendUserData = await db.collection('Users').insertOne(newUser as User);

        return sendUserData;
    }


}


/* this to getSingleUser */
export const GetSingleUser = async (id: string | undefined = undefined) => {

    if (id === undefined) {
        console.log(`${id} userId you entered is `);
    }
    const getSingleUser = await db.collection('Users').findOne({ _id: id });

    return getSingleUser;
}


export const GetAllUsers = async () => {

    const users = await db.collection('Users').find({}).toArray();

    return users;
}