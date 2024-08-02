import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    create(dto: CreateTodoDto): Promise<import("./todos.entity").Todo>;
    findMany(): Promise<import("./todos.entity").Todo[]>;
    update(id: number, dto: CreateTodoDto): Promise<import("./todos.entity").Todo>;
    delete(id: number): Promise<import("./todos.entity").Todo>;
}
