export function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className=" w-full text-center bg-purple-600 px-6 py-3 mt-6 text-white tracking-wider hover:bg-purple-700 rounded-lg transition duration-200 ease-in-out active:scale-95 mb-10"
    >
      {children}
    </button>
  );
}
