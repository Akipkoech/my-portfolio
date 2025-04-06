
import BackToTopButton from "../components/BackToTopButton"; // Adjust the path as needed

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-gray-900 to-gray-800">
        {/* Copyright and Back to Top */}
        <div className="mt-4 border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Alex Koech. All rights reserved.</p>
          <BackToTopButton />
        </div>
    </footer>
  );
}