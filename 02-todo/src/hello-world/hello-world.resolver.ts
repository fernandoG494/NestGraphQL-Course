import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
  @Query(() => String, {
    description: "Return 'hello world' string",
    name: 'hello',
  })
  helloWorld(): string {
    return 'Hello world';
  }

  @Query(() => Float, { name: 'randomNumber' })
  getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, { name: 'randomFromZeroTo' })
  getRandomFromZeroTo(
    @Args('to', { type: () => Int, nullable: true })
    to: number = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
