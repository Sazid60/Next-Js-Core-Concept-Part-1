"use client"
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-6 ">Next.js Hello!</h1>

      <button
        onClick={handleNavigation}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
      >
        Dashboard
      </button>
    </div>
  );
};

export default HomePage;
