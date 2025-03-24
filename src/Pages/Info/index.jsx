import "./Info.css";

export default function Info() {
  return (
    <div id="info" className="w-full max-w-4xl mx-auto py-10 text-center">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-gray-700 text-lg">
        Welcome to our website! We are dedicated to providing you with the best experience.
        Our mission is to deliver high-quality services and information to help you succeed.
      </p>
      <div className="mt-6 flex justify-center">
        <img 
          src="https://via.placeholder.com/600x300" 
          alt="About Us" 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
