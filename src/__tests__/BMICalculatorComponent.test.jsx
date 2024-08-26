import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BMICalculatorComponent from "../BMICalculatorComponent";
describe("BMICalculatorComponent", () => {
  test("renders correctly", () => {
    render(<BMICalculatorComponent />);

    // ตรวจสอบการแสดงหัวข้อ
    expect(screen.getByText(/BMI Calculator/i)).toBeDefined();

    // ตรวจสอบการแสดงปุ่ม Calculate BMI
    expect(
      screen.getByRole("button", { name: /Calculate BMI/i })
    ).toBeDefined();
  });
});
