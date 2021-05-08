import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConvertCtoF from "./cf-converter";

describe("CF Converter", () => {
  test("returns 0C for 32F", () => {
    // Setup
    render(<ConvertCtoF />);

    // Exercise
    userEvent.type(screen.getByRole("textbox"), "0");

    // Assert 

    expect(screen.getByRole("status", {})).toHaveTextContent("32");
  });

  test("return 100C for 212F", function () {
    // Setup
    render(<ConvertCtoF />);

    // Exercise
    userEvent.type(screen.getByRole("textbox"), "100");

    // Assert
    expect(screen.getByRole("status", {})).toHaveTextContent("212");
  });

  test("return n/a for ajgb2241", () => {
    // Setup
    render(<ConvertCtoF />);

    // Exercise
    userEvent.type(screen.getByRole("textbox"), "ajgb2241");

    // Assert
    expect(screen.getByRole("status", {})).toHaveTextContent("n/a");
  });
});
