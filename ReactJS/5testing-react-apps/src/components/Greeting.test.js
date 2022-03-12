import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //... nothing here

    //Assert
    const helloWorldElement = screen.getByText("Hello World!!", {
      exact: true,
    });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders Good to see you text if the button WAS NOT clicked", () => {
    render(<Greeting />);
    const paragraphElement = screen.getByText("Good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("renders Text Changed! if the button WAS clicked", () => {
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const paragraphElement = screen.getByText("Text Changed!", {
      exact: false,
    });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("does not renders Good to see you text if the button WAS clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphElement = screen.queryByText("Good to see you", {
      exact: false,
    });
    expect(paragraphElement).toBeNull();
  });
});
