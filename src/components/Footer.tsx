export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} Smegnew. All Rights Reserved.</p>
      </div>
    </footer>
  );
}