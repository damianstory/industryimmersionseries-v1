import { FileText, Users, Upload, Award } from "lucide-react";

function Feature() {
  return (
    <div className="w-full pt-10 lg:pt-20 pb-5 lg:pb-10">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <div className="flex flex-col gap-10">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-[#0092ff]">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting students to careers through self-directed, incentive driven skill building and industry awareness activities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <FileText className="w-8 h-8 stroke-1 text-[#0092ff]" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Monthly Challenges Released</h3>
                <p className="text-gray-600 max-w-xs text-base">
                  Each month, a new industry partner releases a skill-building challenge designed to introduce students to occupations and opportunities in their industry.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md aspect-square p-6 flex justify-between flex-col">
              <Users className="w-8 h-8 stroke-1 text-[#0092ff]" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Students Complete Activities</h3>
                <p className="text-gray-600 max-w-xs text-base">
                  Students individually work on the challenge, developing awareness of industry opportunities, relevant skills, post-secondary pathways, and more.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md aspect-square p-6 flex justify-between flex-col">
              <Upload className="w-8 h-8 stroke-1 text-[#0092ff]" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Submission Process</h3>
                <p className="text-gray-600 max-w-xs text-base">
                  Completed work is submitted and assessed against a rubric for review by the selection committee. Twenty submissions will selected each month.  
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <Award className="w-8 h-8 stroke-1 text-[#0092ff]" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight font-semibold">Winners Selected & Rewarded</h3>
                <p className="text-gray-600 max-w-xs text-base">
                  Outstanding submissions receive micro grants and recognition from industry partners each month. $10,000 in micro grants are awarded EACH month 🎉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature }; 