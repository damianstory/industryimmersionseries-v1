export default function SectionDivider() {
  return (
    <div className="w-full bg-black py-4 px-6 flex items-center justify-center overflow-hidden">
      <div className="flex items-center gap-2 text-white text-center">
        <span className="text-2xl">✦</span>
        <span className="flex flex-col sm:flex-row w-full">
          <span className="text-lg font-medium">Real Companies Helping Students</span>
          <span className="text-lg font-medium sm:ml-2">Build Real Skills</span>
        </span>
        <span className="text-2xl">✦</span>
      </div>
    </div>
  );
} 