const cinema = require("./cinema");
const { expect } = require("chai");

describe("Tests", () => {
  describe("showMovies", () => {
    it("Empty Array", () => {
      expect(cinema.showMovies([])).to.be.equal(
        "There are currently no movies to show."
      );
    });
    it("Array of Movies", () => {
      expect(
        cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])
      ).to.be.equal("King Kong, The Tomorrow War, Joker");
    });
    it("Array of single movies", () => {
      expect(cinema.showMovies(["King Kong"])).to.be.equal("King Kong");
    });
  });
  describe("ticketPrice", () => {
    it("Premiere price", () => {
      expect(cinema.ticketPrice("Premiere")).to.be.equal(12.0);
    });
    it("Normal price", () => {
      expect(cinema.ticketPrice("Normal")).to.be.equal(7.5);
    });
    it("Discount price", () => {
      expect(cinema.ticketPrice("Discount")).to.be.equal(5.5);
    });
    it("Invalid input", () => {
      expect(() => cinema.ticketPrice("Invalid")).to.throw(
        "Invalid projection type."
      );
    });
  });
  describe("swapSeatsInHall", () => {
    it("Only one param given", () => {
      expect(cinema.swapSeatsInHall(1)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Floating number given", () => {
      expect(cinema.swapSeatsInHall(1.25, 5)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Greater than 20 number given", () => {
      expect(cinema.swapSeatsInHall(25, 5)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Negative number given", () => {
      expect(cinema.swapSeatsInHall(-5, 5)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Zero given as number", () => {
      expect(cinema.swapSeatsInHall(0, 5)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Equal numbers", () => {
      expect(cinema.swapSeatsInHall(5, 5)).to.be.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Normal expected output", () => {
      expect(cinema.swapSeatsInHall(5, 10)).to.be.equal(
        "Successful change of seats in the hall."
      );
    });
  });
});
