import assert from "node:assert/strict";
import test from "node:test";
import { DomainError, isExistingEmail, readBoundedInteger } from "./domain-validation.ts";
test("case-insensitive email comparison", () => {
  assert.equal(isExistingEmail(["admin@example.test"], " ADMIN@EXAMPLE.TEST "), true);
});
test("bounded integers reject decimals and values outside range", () => {
  assert.equal(readBoundedInteger("3", "count", 1, 4), 3);
  assert.throws(() => readBoundedInteger(5, "count", 1, 4), DomainError);
  assert.throws(() => readBoundedInteger(1.5, "count", 1, 4), DomainError);
});
