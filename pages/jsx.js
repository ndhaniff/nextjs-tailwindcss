export default function jsxExample() {
  return (
    <>
      <section>
        <button className="bg-red-500 custom-btn">Button 1</button>
        <button className="bg-red-600 custom-btn">Button 2</button>
        <button className="bg-red-700 custom-btn">Button 2</button>
      </section>
      <style jsx>{`
        .custom-btn {
          @apply text-white font-bold py-2 px-4 rounded;
        }
      `}</style>
    </>
  );
}
