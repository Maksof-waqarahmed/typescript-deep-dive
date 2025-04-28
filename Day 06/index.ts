// 🔢 1. Enums in TypeScript
// Enums = named constants you can use instead of strings or numbers.
enum Direction {
    Up,
    Down,
    Left,
    Right
}

let move: Direction = Direction.Up;
console.log(move); // 0 (default: starts from 0)
//   You can also give them custom values:
enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Loading = "LOADING"
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // "SUCCESS"
