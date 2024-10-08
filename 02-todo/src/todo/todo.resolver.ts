import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput } from './dto/input/create-dto.input';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo], { name: 'todos' })
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.findOne(id);
  }

  @Mutation( () => Todo, { name: 'createTodo' })
  createTodo(
    @Args('createTodoInput') createTodoInput: CreateTodoInput
  ) {
    return this.todoService.create( createTodoInput );
  }

  updateTodo() {}

  removeTodo() {}
}
