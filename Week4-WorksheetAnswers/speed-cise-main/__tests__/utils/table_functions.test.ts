import "@testing-library/jest-dom";
import { sortData } from "../../src/utils/table_functions";

const testData = [
  {
    title: "4 - This should be fourth",
    content: "3 - Some random content",
  },
  { title: "3 - This should be third", content: "2 - Some random content" },
  {
    title: "2 - This should be second",
    content: "1 - Some random content",
  },
  { title: "1 - This should be first", content: "4 - Some random content" },
];

const orderedByTitle = [
  { title: "1 - This should be first", content: "4 - Some random content" },
  {
    title: "2 - This should be second",
    content: "1 - Some random content",
  },
  { title: "3 - This should be third", content: "2 - Some random content" },
  {
    title: "4 - This should be fourth",
    content: "3 - Some random content",
  },
];

const orderedByContent = [
  {
    title: "2 - This should be second",
    content: "1 - Some random content",
  },
  { title: "3 - This should be third", content: "2 - Some random content" },
  {
    title: "4 - This should be fourth",
    content: "3 - Some random content",
  },
  { title: "1 - This should be first", content: "4 - Some random content" },
];

describe("Util Functions - Table", () => {
  it("sorts data based on title", () => {
    expect(sortData(testData, "title", false)).toEqual(orderedByTitle);
  });

  it("sorts data by title reversed", () => {
    expect(sortData(testData, "title", true)).toEqual(orderedByTitle.reverse());
  });

  it("sorts data based on content", () => {
    expect(sortData(testData, "content", false)).toEqual(orderedByContent);
  });

  it("sorts data by content reversed", () => {
    expect(sortData(testData, "content", true)).toEqual(
      orderedByContent.reverse()
    );
  });
});
