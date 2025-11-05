import Header from "./components/Header";
import Generator from "./components/Generator";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Generator />
      </main>
      <Footer />
    </div>
  );
}
