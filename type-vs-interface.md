# Type Aliases vs Interfaces in TypeScript

## Introduction

TypeScript gives us two ways to describe the shape of data: `type` aliases and `interface`. They look similar and often work interchangeably, but they have important differences. Knowing them helps you write cleaner, more maintainable code.

## Core Differences

**Declaration merging.** Interfaces with the same name merge automatically, while type aliases cannot be declared twice.

```typescript
interface User { name: string }
interface User { age: number }
// User is now { name: string; age: number }
```

**Flexibility.** A `type` can name unions, primitives, and tuples. An `interface` can only describe object shapes.

```typescript
type ID = string | number;
type Point = [number, number];
```

**Extending.** Interfaces use `extends`, while types combine with intersections (`&`).

```typescript
interface Admin extends User { role: string }
type Staff = User & { role: string };
```

## When to Choose Which

Use `interface` for object shapes, class contracts (`implements`), and public library APIs where declaration merging is useful. Use `type` for unions, tuples, function signatures, and advanced type transformations.

## Conclusion

Both tools are powerful, and for plain objects the choice often comes down to style. A good rule is to use `interface` for objects and `type` for everything else. Whichever you pick, stay consistent across your project.
