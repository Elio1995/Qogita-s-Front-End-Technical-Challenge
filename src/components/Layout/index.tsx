import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <div className="container mx-auto px-4 ">
    <div className="text-gray-100 bg-blue-700 bg-opacity-30 body-font shadow w-full flex justify-between">
      <strong className="text-2xl m-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
        Qogita
      </strong>
      <nav>
        <ul className="m-5 flex gap-4">
          <li className="border-none mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
            <Link href="/">
              <a className="underline">Products</a>
            </Link>
          </li>
          <li className="border-none mr-5 hover:text-gray-900 cursor-pointer border-b border-transparent hover:border-indigo-600">
            <Link href="/cart">
              <a className="underline">Your Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    {children}
  </div>
);

export default Layout;
