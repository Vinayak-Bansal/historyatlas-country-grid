import { Crown, Sword, BookOpen, Flag, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CountryTimelineProps {
  country: {
    name: string;
    code: string;
  };
}

const CountryTimeline = ({ country }: CountryTimelineProps) => {
  // Sample timeline data - in a real app this would come from an API
  const getTimelineData = (countryName: string) => {
    const timelineMap: { [key: string]: any[] } = {
      "France": [
        { year: "843", event: "Treaty of Verdun divides Carolingian Empire", icon: BookOpen, type: "treaty" },
        { year: "1789", event: "French Revolution begins", icon: Sword, type: "revolution" },
        { year: "1804", event: "Napoleon becomes Emperor", icon: Crown, type: "leadership" },
        { year: "1958", event: "Fifth Republic established", icon: Flag, type: "government" },
        { year: "1993", event: "Maastricht Treaty creates EU", icon: Building2, type: "alliance" }
      ],
      "Germany": [
        { year: "962", event: "Holy Roman Empire founded", icon: Crown, type: "empire" },
        { year: "1871", event: "German unification", icon: Flag, type: "unification" },
        { year: "1949", event: "Federal Republic established", icon: Building2, type: "government" },
        { year: "1989", event: "Berlin Wall falls", icon: Sword, type: "revolution" },
        { year: "1990", event: "German reunification", icon: Flag, type: "unification" }
      ],
      "Japan": [
        { year: "1603", event: "Tokugawa shogunate begins", icon: Crown, type: "leadership" },
        { year: "1868", event: "Meiji Restoration", icon: Sword, type: "revolution" },
        { year: "1945", event: "End of WWII, new constitution", icon: BookOpen, type: "treaty" },
        { year: "1964", event: "Tokyo Olympics", icon: Building2, type: "cultural" },
        { year: "1989", event: "Heisei era begins", icon: Crown, type: "leadership" }
      ]
    };
    
    return timelineMap[countryName] || [
      { year: "1000", event: "Ancient period", icon: BookOpen, type: "historical" },
      { year: "1500", event: "Medieval period", icon: Crown, type: "historical" },
      { year: "1800", event: "Modern period", icon: Flag, type: "historical" },
      { year: "1950", event: "Contemporary period", icon: Building2, type: "historical" }
    ];
  };

  const timelineEvents = getTimelineData(country.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="w-full"
    >
      <div className="bg-timeline-bg rounded-lg p-6">
        <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">
          Timeline of Major Events
        </h3>
        
        <ScrollArea className="w-full">
          <div className="flex space-x-6 pb-4 min-w-max">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex-shrink-0 w-64"
              >
                <div className="relative">
                  {/* Timeline line */}
                  {index < timelineEvents.length - 1 && (
                    <div className="absolute top-8 left-8 w-48 h-0.5 bg-chart-gray opacity-30" />
                  )}
                  
                  {/* Event card */}
                  <div className="bg-stats-bg rounded-lg p-4 shadow-sm border">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-chart-blue rounded-full flex items-center justify-center mr-3">
                        <event.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-lg font-bold text-chart-blue">
                        {event.year}
                      </div>
                    </div>
                    <p className="text-sm text-text-primary font-body leading-relaxed">
                      {event.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </motion.div>
  );
};

export default CountryTimeline;