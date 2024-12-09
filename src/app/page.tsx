import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Navbar />
      <main className="text-center">
        <p className="text-xl">
          休日、平日の空き時間をわくわくするものに
        </p>
      </main>
    </div>
  );
}
