import Link from 'next/link';

const Content = ({ children, title, desc, breadcrumb }) => (
  <div className="fixed z-0 w-full bg-gray-100 wrapper">
    <nav className="h-16 py-4 bg-white shadow topbar">
      <div className="inner ml-80">
        {breadcrumb && (
          <div className="breadcrumb">
            <Link href="/">
              <a className="text-lg text-gray-400">Home</a>
            </Link>
            <span className="mx-2 font-bold text-gray-400">></span>
            {breadcrumb.parent && (
              <a className="text-lg text-gray-400">{breadcrumb.parent}</a>
            )}
            <span className="mx-2 font-bold text-gray-400">></span>
            {breadcrumb.active && (
              <Link href={breadcrumb.active.link}>
                <a className="text-lg text-blue-500">
                  {breadcrumb.active.text}
                </a>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
    <div className="container w-full h-screen px-4 pt-10 mx-auto ">
      <div className="p-4 bg-white rounded shadow ml-80">
        <div className="pb-3 border-b">
          <h1 className="text-blue-500 font-lg mibold text-md ">
            {title ? title : 'No Title'}
          </h1>
          {desc && <div className="mb-3 text-xs text-gray-400">{desc}</div>}
        </div>
        <main className="mt-4">{children}</main>
      </div>
    </div>
  </div>
);

export default Content;
