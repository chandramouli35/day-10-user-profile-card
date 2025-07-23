function Toast({ show, message }) {
  if (!show) return null;
  return (
    <div className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-md transition-all duration-300">
      {message}
    </div>
  );
}

export default Toast;
