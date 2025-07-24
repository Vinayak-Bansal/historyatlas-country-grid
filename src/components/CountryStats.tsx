import { Users, MapPin, DollarSign, MessageCircle, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CountryStatsProps {
  country: {
    name: string;
    code: string;
  };
}

const CountryStats = ({ country }: CountryStatsProps) => {
  // Sample data - in a real app this would come from an API
  const getStatsData = (countryName: string) => {
    const statsMap: { [key: string]: any } = {
      "France": {
        population: "67.8M",
        area: "643,801 km²",
        gdp: "$2.94T",
        languages: "French",
        capital: "Paris"
      },
      "Germany": {
        population: "83.2M",
        area: "357,022 km²",
        gdp: "$4.26T",
        languages: "German",
        capital: "Berlin"
      },
      "Japan": {
        population: "125.8M",
        area: "377,975 km²",
        gdp: "$4.94T",
        languages: "Japanese",
        capital: "Tokyo"
      },
      "United Kingdom": {
        population: "67.8M",
        area: "243,610 km²",
        gdp: "$3.13T",
        languages: "English",
        capital: "London"
      }
    };
    
    return statsMap[countryName] || {
      population: "N/A",
      area: "N/A",
      gdp: "N/A",
      languages: "N/A",
      capital: "N/A"
    };
  };

  const stats = getStatsData(country.name);

  const statsItems = [
    {
      icon: Users,
      label: "Population",
      value: stats.population
    },
    {
      icon: MapPin,
      label: "Area",
      value: stats.area
    },
    {
      icon: DollarSign,
      label: "GDP",
      value: stats.gdp
    },
    {
      icon: MessageCircle,
      label: "Languages",
      value: stats.languages
    },
    {
      icon: Building,
      label: "Capital",
      value: stats.capital
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full"
    >
      <Card className="bg-stats-bg shadow-lg border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {statsItems.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-chart-blue" />
                </div>
                <div className="text-2xl font-bold text-text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CountryStats;