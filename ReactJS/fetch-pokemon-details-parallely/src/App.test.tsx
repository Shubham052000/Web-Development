import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// Mock the fetch function
global.fetch = vi.fn();

// Sample pokemon response
const mockPokemonListResponse = {
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
  ],
};

const mockPokemonDetailResponse1 = {
  name: "bulbasaur",
  abilities: [
    { ability: { name: "overgrow" } },
    { ability: { name: "chlorophyll" } },
  ],
};

const mockPokemonDetailResponse2 = {
  name: "ivysaur",
  abilities: [
    { ability: { name: "overgrow" } },
    { ability: { name: "chlorophyll" } },
  ],
};

describe("App", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading state initially", () => {
    // Mock a never-resolving fetch
    (global.fetch as any).mockImplementation(
      () => new Promise(() => {})
    );

    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders pokemon list on successful fetch", async () => {
    (global.fetch as any).mockImplementation((url: string) => {
      if (url === "https://pokeapi.co/api/v2/pokemon") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPokemonListResponse),
        });
      }
      if (url === "https://pokeapi.co/api/v2/pokemon/1/") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPokemonDetailResponse1),
        });
      }
      if (url === "https://pokeapi.co/api/v2/pokemon/2/") {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPokemonDetailResponse2),
        });
      }
      return Promise.reject(new Error("Unknown URL"));
    });

    render(<App />);

    // Wait for pokemon names to appear
    await waitFor(() => {
      expect(screen.getByText("bulbasaur")).toBeInTheDocument();
    });

    expect(screen.getByText("ivysaur")).toBeInTheDocument();

    // Check abilities are rendered (use getAllByText since they appear multiple times)
    const overgrowtElements = screen.getAllByText("overgrow");
    expect(overgrowtElements).toHaveLength(2);
    
    const chlorophyllElements = screen.getAllByText("chlorophyll");
    expect(chlorophyllElements).toHaveLength(2);
  });

  it("handles fetch error gracefully", async () => {
    (global.fetch as any).mockRejectedValue(new Error("Network error"));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Failed to fetch details/i)).toBeInTheDocument();
    });

    expect(screen.getByRole("button", { name: /Retry/i })).toBeInTheDocument();
  });

  it("retries fetch when retry button is clicked", async () => {
    let callCount = 0;
    (global.fetch as any).mockImplementation(() => {
      callCount++;
      if (callCount === 1) {
        return Promise.reject(new Error("First attempt failed"));
      }
      // Second attempt succeeds
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPokemonListResponse),
      });
    });

    render(<App />);

    // Wait for error to appear
    await waitFor(() => {
      expect(screen.getByText(/Failed to fetch details/i)).toBeInTheDocument();
    });

    const retryButton = screen.getByRole("button", { name: /Retry/i });
    await userEvent.click(retryButton);

    // After retry, we expect loading and then list
    // The second call returns the list, so subsequent detail calls will be attempted
    // For this test, just verify retry button was clicked successfully
    expect(callCount).toBeGreaterThan(1);
  });

  it("renders aria-live attribute for accessibility", () => {
    (global.fetch as any).mockImplementation(
      () => new Promise(() => {})
    );

    render(<App />);
    const ariaLiveDiv = screen.getByText("Loading...").parentElement;
    expect(ariaLiveDiv).toHaveAttribute("aria-live", "polite");
  });
});
