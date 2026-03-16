'use client';

export default function Popup() {
  return (
    <div className="relative p-6 rounded-2xl bg-teal-800 shadow-lg w-100 text-white">
      {/* Speech bubble triangle – border layer */}
      <div className="absolute -top-3.25 left-6 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-3.25 border-b-gray-100" />
      {/* Speech bubble triangle – fill layer */}
      <div className="absolute -top-3 left-5 w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-12 border-b-teal-800" />
      Du er nu inde på et test forløb og vi håber, du vil bære over med, at alt ikke ser ud, som det plejer. Det, du skal teste er vores idé til en ny AI-funktion til lærere. Klik på knappen ovenover for at åbne AI-chatten. Du kan chatte lige så længe, du har lyst. Tak for at være med!
    </div>
  );
}
