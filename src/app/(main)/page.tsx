import { Badge } from "@/components/ui/badge";
import { mockData } from "@/mock/mockData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function App() {
  const statusColor = {
    confirmed: "bg-green-500",
    potential: "bg-red-500",
  };

  return (
    <div className="bg-zinc-100 h-screen p-4">
      <div className="flex gap-8">
        {mockData.map((data) => (
          <div key={data._id} className="flex gap-10 p-4 border-2 rounded-md">
            <div className="space-y-4">
              <div className="h-36 w-36 rounded-full overflow-hidden">
                <img src={data.project_logo} alt={`logo of ${data.project_name}`} />
              </div>
              <Badge className={statusColor[data.status.toLowerCase()]}>{data.status}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-6">
                <div>
                  <p className="text-lg font-medium">Name</p>
                  <p className="text-xl font-semibold">{data.project_name}</p>
                </div>
                <div>
                  <p className="text-lg font-medium">Symbol</p>
                  <p className="uppercase text-xl font-semibold">{data.project_symbol}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <p>category:</p>
                <p>{data.category}</p>
              </div>

              <Link href={`/${data._id}`} className="flex gap-1 mt-auto">
                Check now <ArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
