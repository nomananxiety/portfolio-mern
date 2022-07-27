export default function NotFound() {
  return (
    <>
      <div className="text-center px-10 mt-40">
        <h1 className="font-extrabold text-[70px]">404</h1>
        <p></p>
        <p className="block">Oopss, page not found sorry :)</p>
        <a
          href="/"
          className="font-semibold hover:font-extrabold ease-in-out text-black"
        >
          Back To Home
        </a>
      </div>
    </>
  );
}
