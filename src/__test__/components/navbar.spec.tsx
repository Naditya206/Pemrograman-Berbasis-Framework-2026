import { render, screen } from "@testing-library/react"
import Navbar from "@/components/layouts/navbar"
import { SessionProvider } from "next-auth/react"

// Mock next-auth
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({ data: null, status: "unauthenticated" })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

describe("Navbar Component", () => {
  it("renders navbar correctly", () => {
    const component = render(
      <SessionProvider session={null}>
        <Navbar />
      </SessionProvider>
    )
    expect(screen.getByTestId("button-signin").textContent).toBe("Sign In")
    expect(component).toMatchSnapshot()
  })
})
