import operate from "./Operate";
import Big from "big.js";

describe("operate", () => {
    it("should add two numbers", () => {
        const result = operate(2, 3, "+");
        expect(result).toBe(Big(5).toString());
    });

    it("should subtract two numbers", () => {
        const result = operate(5, 2, "-");
        expect(result).toBe(Big(3).toString());
    });

    it("should multiply two numbers", () => {
        const result = operate(2, 3, "x");
        expect(result).toBe(Big(6).toString());
    });

    it("should divide two numbers", () => {
        const result = operate(6, 2, "÷");
        expect(result).toBe(Big(3).toString());
    });

    it("should return error message when dividing by 0", () => {
        const result = operate(6, 0, "÷");
        expect(result).toBe("Can't divide by 0.");
    });

    it("should find modulo of two numbers", () => {
        const result = operate(7, 3, "%");
        expect(result).toBe(Big(1).toString());
    });

    it("should return error message when dividing by 0 for modulo", () => {
        const result = operate(7, 0, "%");
        expect(result).toBe("Can't find modulo as can't divide by 0.");
    });

    it("should throw an error for unknown operation", () => {
        expect(() => operate(2, 3, "^")).toThrow("Unknown operation '^'");
    });
});
