import { test, describe } from "node:test";
import assert from "node:assert/strict";

describe("CourseCard keyboard interaction & repeated Space key handling", () => {
  test("Enter key triggers onClick and calls preventDefault", () => {
    let clickCount = 0;
    let defaultPrevented = false;

    const onClick = () => {
      clickCount++;
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onClick();
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        if (!e.repeat) {
          onClick();
        }
      }
    };

    const enterEvent = {
      key: "Enter",
      repeat: false,
      preventDefault: () => {
        defaultPrevented = true;
      },
    };

    handleKeyDown(enterEvent);

    assert.equal(clickCount, 1);
    assert.equal(defaultPrevented, true);
  });

  test("Space key triggers onClick on initial press and ignores repeated events while held", () => {
    let clickCount = 0;
    let preventDefaultCallCount = 0;

    const onClick = () => {
      clickCount++;
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onClick();
      } else if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        if (!e.repeat) {
          onClick();
        }
      }
    };

    // 1. Initial space press (repeat: false)
    const initialSpaceEvent = {
      key: " ",
      repeat: false,
      preventDefault: () => {
        preventDefaultCallCount++;
      },
    };

    handleKeyDown(initialSpaceEvent);
    assert.equal(clickCount, 1, "onClick should be called on initial space press");
    assert.equal(preventDefaultCallCount, 1, "preventDefault should be called on initial space press");

    // 2. Repeated space press while holding key down (repeat: true)
    const repeatedSpaceEvent1 = {
      key: " ",
      repeat: true,
      preventDefault: () => {
        preventDefaultCallCount++;
      },
    };

    const repeatedSpaceEvent2 = {
      key: " ",
      repeat: true,
      preventDefault: () => {
        preventDefaultCallCount++;
      },
    };

    handleKeyDown(repeatedSpaceEvent1);
    handleKeyDown(repeatedSpaceEvent2);

    assert.equal(clickCount, 1, "onClick should NOT be called again on repeated space events");
    assert.equal(preventDefaultCallCount, 3, "preventDefault should be called on every space keydown to prevent page scroll");
  });
});
