import { greet } from "../src/app";

test("greet returns correct string", () => {
  expect(greet("DevOps")).toBe("Hello, DevOps!");
});
