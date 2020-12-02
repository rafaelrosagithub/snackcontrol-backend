import { getRepository } from "typeorm";
import { Tasks } from "../models/Tasks";
import { Request, Response } from "express";
import Product from "../models/Product";
import Provider from "../models/Provider";

export const getTasks = async (request: Request, response: Response) => {
    console.log("TasksController getTasks()");
    const tasks = await getRepository(Tasks).find({
        order: {
            title: "ASC",
        },
    });
    response.json(tasks);
};

export const getTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    console.log(typeof id);
    console.log(id);
    console.log("getTask findBy id: " + id);
    const task = await getRepository(Tasks).findOne(id);
    return response.json(task);
};

export const saveTask = async (request: Request, response: Response) => {
    console.log("saveTask Create...");
    const task = await getRepository(Tasks).save(request.body);
    return response.json(task);
};

export const updateTask = async (request: Request, response: Response) => {
    console.log("updateTask update...");
    const { id } = request.params;
    const task = await getRepository(Tasks).update(id, request.body);

    if (task.affected == 1) {
        const taskUpdated = await getRepository(Tasks).findOne(id);
        return response.json(taskUpdated);
    }

    return response.status(404).json({ message: "Task not found!" });
};

export const finishedProvider = async (
    request: Request,
    response: Response
) => {
    console.log("TasksController finishedProvider()");
    const { id } = request.params;
    const providerActive = await getRepository(Provider).findOne(id);
    const provider = await getRepository(Provider).update(id, {
        active: !providerActive?.active,
    });

    if (provider.affected == 1) {
        const providerActive = await getRepository(Provider).findOne(id);
        return response.json({ message: "Provider disabled" });
    }

    return response.status(404).json({ message: "Provider not found!" });
};

export const finishedProduct = async (request: Request, response: Response) => {
    console.log("TasksController finishedProduct()");
    const { id } = request.params;
    const productActive = await getRepository(Product).findOne(id);
    const product = await getRepository(Product).update(id, {
        active: !productActive?.active,
    });

    if (product.affected == 1) {
        const productActive = await getRepository(Provider).findOne(id);
        return response.json({ message: "Product disabled" });
    }

    return response.status(404).json({ message: "Product not found!" });
};

export const removeTask = async (request: Request, response: Response) => {
    const { id } = request.params;
    const task = await getRepository(Tasks).delete(id);
    if (task.affected == 1) {
        const taskUpdated = await getRepository(Tasks).findOne(id);
        return response.json({ message: "Task removed!" });
    }

    return response.status(404).json({ message: "Task not found!" });
};
