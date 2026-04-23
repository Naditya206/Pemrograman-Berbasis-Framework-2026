import { render, screen } from "@testing-library/react"
import ProdukPage from "@/pages/produk"

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/product",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<ProdukPage />)
    // expect(screen.getByTestId("title").textContent).toBe("Product Page")
    expect(page).toMatchSnapshot()
  })
})
