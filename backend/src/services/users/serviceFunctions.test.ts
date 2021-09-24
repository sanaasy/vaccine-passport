import { expect } from 'chai';
import { User } from '../../Types/user';
import { db } from '../../app';
import { GetAllUsers, GetSingleUser, PostUser } from './serviceFunction-users'

describe('Test for service Functions for Users', () => {

  describe('Test for PostUser Function', () => {
    it('it should return the same value as the mock Value', async () => {

      const postUser = await PostUser(MockReturnValueforUser());
      const respones = { "acknowledged": true, "insertedId": "45df261c1420-43f4-8e66-4be0187d7104" }
      expect(postUser).to.deep.equal(respones);

    })
  })

  describe('Test for GetSingleUser Function', () => {
    it('it should return the same value as the database', async () => {

      const sendfirstUser = await db.collection('Users').insertOne(MockReturnValueforGetUser() as User);
      const getSingleUser = await GetSingleUser(MockReturnValueforGetUser()._id);

      const responseforServiceFunction = { "acknowledged": true, "insertedId": "45df261c1420-43f4-8e96-4be0187d7104" };
      const responseforDatabase = { "_id": "45df261c1420-43f4-8e96-4be0187d7104", "name": "Khaled", "role": "admin" };

      expect(sendfirstUser).to.deep.equal(responseforServiceFunction);
      expect(getSingleUser).to.deep.equal(responseforDatabase);

    })
  })

  describe('Test for GetAllUsers Functions', () => {
    it('it should return the same value as the database', async () => {

      const mangoDBAllUsers = await db.collection('Users').find({}).toArray();
      const getAllUsers = await GetAllUsers();

      expect(getAllUsers).to.deep.equal(mangoDBAllUsers);
    })
  })

  const MockReturnValueforUser = () => {
    return {
      _id: "45df261c1420-43f4-8e66-4be0187d7104",
      name: "Khaled",
      role: "admin"
    } as User
  }

  const MockReturnValueforGetUser = () => {
    return {
      _id: "45df261c1420-43f4-8e96-4be0187d7104",
      name: "Khaled",
      role: "admin"
    } as User
  }
})