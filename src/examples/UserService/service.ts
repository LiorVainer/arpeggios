import { ArpeggiosConfig, ArpeggiosService } from "arpeggios/service";
import axios from "axios";
import { ObjectId } from "mongodb";
import arpeggios, { Arpeggios } from "../..";
import { User, UserWithId } from "./types";

const arpeggiosInstance = arpeggios.create();

export class UserService extends ArpeggiosService<UserWithId, User> {
  constructor(config?: ArpeggiosConfig) {
    super("/user", config);
  }

  public getAll = this.service.get<UserWithId[]>("all");
  public getByFullname = this.service.getByParam<UserWithId, string>("fullName");
  public isEmailTaken = this.service.getByParam<boolean, string>(["email", "taken"]);
}

const userService = new UserService();

async function getUserByFullname(fullname: string) {
  const user: User = await userService.getByFullname(fullname);
}

async function isEmailTaken(email: string) {
  const isEmailTaken: boolean = await userService.isEmailTaken(email);
}

// const userService = new ArpeggiosService<User>("/user", {
//   routes: { getAll: ["get", "all"], deleteAll: "all", deleteById: "id", post: "create", patch: "update" },
//   instance: arpeggiosInstance,
// });

async function getUsers() {
  const users: User[] = await userService.getAll();
}

async function getUserById(id: ObjectId) {
  const user: User = await userService.getById(id);
}

async function deleteAllUsers(id: ObjectId) {
  const user: User = await userService.getById(id); // default id type is mongodb ObjectId
}

async function deleteUserById(id: ObjectId) {
  const user: User = await userService.getById(id); // default id type is mongodb ObjectId
}

async function createUser(newUser: User) {
  const userCreated: User = await userService.post(newUser);
}

async function updateUser(partialUser: Partial<User>) {
  const updatedUser: User = await userService.patch(partialUser);
}