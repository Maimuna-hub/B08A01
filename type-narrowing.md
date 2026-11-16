# Type Narrowing in TypeScript

## Introduction

Type narrowing is how TypeScript refines a broad type, such as a union, into a more specific one inside a block of code. When you run a runtime check, the compiler understands which type you are working with and lets you use its properties safely. Three common tools for this are `typeof`, `instanceof`, and the `in` operator.

## Narrowing with typeof

Use `typeof` to distinguish primitive types.

```typescript
function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // value is string
  }
  return value.toFixed(2); // value is number
}
```

## Narrowing with instanceof

Use `instanceof` to check whether a value is an instance of a class, such as `Error`.

```typescript
function handle(error: Error | string) {
  if (error instanceof Error) {
    console.log(error.message); // error is Error
  } else {
    console.log(error); // error is string
  }
}
```

## Narrowing with the in Operator

Use `in` to check whether an object has a certain property.

```typescript
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function speak(pet: Cat | Dog) {
  if ("meow" in pet) {
    pet.meow(); // pet is Cat
  } else {
    pet.bark(); // pet is Dog
  }
}
```

## Conclusion

Type narrowing lets you work safely with union types without type assertions. Choose `typeof` for primitives, `instanceof` for classes, and `in` for object shapes, and TypeScript will handle the rest.
