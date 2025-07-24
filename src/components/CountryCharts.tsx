import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface CountryChartsProps {
  country: {
    name: string;
    code: string;
  };
}

const CountryCharts = ({ country }: CountryChartsProps) => {
  // Sample chart data - in a real app this would come from an API
  const getChartData = (countryName: string) => {
    const basePopulation = countryName === "France" ? 55 : 
                          countryName === "Germany" ? 60 : 
                          countryName === "Japan" ? 100 : 50;
    
    const baseGDP = countryName === "France" ? 2000 : 
                   countryName === "Germany" ? 2500 : 
                   countryName === "Japan" ? 3500 : 1500;

    const populationData = [];
    const gdpData = [];
    
    for (let year = 1990; year <= 2020; year += 5) {
      const growth = (year - 1990) * 0.3;
      populationData.push({
        year: year.toString(),
        population: Math.round(basePopulation + growth + Math.random() * 5)
      });
      
      const gdpGrowth = (year - 1990) * 80;
      gdpData.push({
        year: year.toString(),
        gdp: Math.round(baseGDP + gdpGrowth + Math.random() * 200)
      });
    }
    
    return { populationData, gdpData };
  };

  const { populationData, gdpData } = getChartData(country.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      {/* Population Growth Chart */}
      <Card className="bg-stats-bg shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-heading text-text-primary">
            Population Growth (Millions)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={populationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-gray))" opacity={0.3} />
              <XAxis 
                dataKey="year" 
                stroke="hsl(var(--text-primary))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--text-primary))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--stats-bg))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="population" 
                stroke="hsl(var(--chart-blue))" 
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--chart-blue))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'hsl(var(--chart-blue))', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* GDP Trends Chart */}
      <Card className="bg-stats-bg shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-xl font-heading text-text-primary">
            GDP Trends (Billion USD)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={gdpData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-gray))" opacity={0.3} />
              <XAxis 
                dataKey="year" 
                stroke="hsl(var(--text-primary))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--text-primary))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--stats-bg))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="gdp" 
                stroke="hsl(var(--chart-green))" 
                strokeWidth={3}
                fill="hsl(var(--chart-green))"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CountryCharts;