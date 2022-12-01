import { describe, expect, test } from "@jest/globals";
import { skills } from "./tags";

describe("An array must contain", () => {
   test("At least one value", () => {
      const array = skills.map((element) => element.length);
      expect(array).not.toContain(0);
      expect(skills.length).not.toBe(0);
   });
});
