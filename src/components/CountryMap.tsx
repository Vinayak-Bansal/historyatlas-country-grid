import { motion } from "framer-motion";

interface CountryMapProps {
  country: {
    name: string;
    code: string;
  };
}

const CountryMap = ({ country }: CountryMapProps) => {
  // Enhanced interactive map data
  const getMapData = (countryName: string) => {
    const mapData: { [key: string]: any } = {
      "France": {
        viewBox: "0 0 100 100",
        paths: [
          { d: "M30,20 Q50,10 70,20 L75,40 Q70,60 50,70 Q30,60 25,40 Z", name: "Mainland France" },
          { d: "M15,15 L20,15 L20,20 L15,20 Z", name: "Corsica" }
        ],
        color: "hsl(var(--chart-blue))",
        cities: [
          { x: 50, y: 35, name: "Paris" },
          { x: 60, y: 50, name: "Lyon" },
          { x: 45, y: 55, name: "Marseille" }
        ]
      },
      "Germany": {
        viewBox: "0 0 100 100",
        paths: [
          { d: "M40,15 L60,20 L65,35 L70,50 L60,65 L45,70 L35,65 L30,50 L35,35 Z", name: "Germany" }
        ],
        color: "hsl(var(--chart-green))",
        cities: [
          { x: 50, y: 25, name: "Berlin" },
          { x: 45, y: 35, name: "Hamburg" },
          { x: 55, y: 45, name: "Munich" }
        ]
      },
      "Japan": {
        viewBox: "0 0 100 100",
        paths: [
          { d: "M60,10 L70,15 L75,25 L70,35 L65,45", name: "Honshu" },
          { d: "M45,20 L55,25 L60,35 L55,45 L50,55", name: "Honshu Central" },
          { d: "M35,30 L45,35 L50,45 L45,55 L40,65", name: "Kyushu" },
          { d: "M25,40 L35,45 L40,55 L35,65 L30,75", name: "Hokkaido" }
        ],
        color: "hsl(var(--chart-gray))",
        cities: [
          { x: 55, y: 30, name: "Tokyo" },
          { x: 50, y: 40, name: "Osaka" },
          { x: 35, y: 50, name: "Kyoto" }
        ]
      },
      "United Kingdom": {
        viewBox: "0 0 100 100",
        paths: [
          { d: "M45,10 L55,15 L60,25 L55,35 L50,45 L45,55 L40,45 L35,35 L40,25 Z", name: "Great Britain" },
          { d: "M30,60 L40,65 L45,75 L40,85 L30,80 L25,70 Z", name: "Ireland" }
        ],
        color: "hsl(var(--destructive))",
        cities: [
          { x: 50, y: 35, name: "London" },
          { x: 45, y: 25, name: "Edinburgh" },
          { x: 35, y: 70, name: "Dublin" }
        ]
      }
    };
    
    return mapData[countryName] || {
      viewBox: "0 0 100 100",
      paths: [{ d: "M25,25 L75,25 L75,75 L25,75 Z", name: countryName }],
      color: "hsl(var(--muted))",
      cities: []
    };
  };

  const mapData = getMapData(country.name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-muted/20 to-muted/40 dark:from-muted/10 dark:to-muted/30 rounded-lg p-6 border border-border/50"
    >
      <div className="text-center relative">
        <svg
          width="240"
          height="240"
          viewBox={mapData.viewBox}
          className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {/* Map regions */}
          {mapData.paths.map((path: any, index: number) => (
            <motion.path
              key={index}
              d={path.d}
              fill={mapData.color}
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              className="transition-all duration-300 hover:opacity-80 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <title>{path.name}</title>
            </motion.path>
          ))}
          
          {/* City markers */}
          {mapData.cities?.map((city: any, index: number) => (
            <motion.g key={index}>
              <motion.circle
                cx={city.x}
                cy={city.y}
                r="2"
                fill="hsl(var(--primary))"
                stroke="white"
                strokeWidth="1"
                className="cursor-pointer transition-all duration-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + 0.1 * index }}
                whileHover={{ scale: 1.5 }}
              />
              <text
                x={city.x}
                y={city.y - 6}
                fontSize="4"
                fill="hsl(var(--foreground))"
                textAnchor="middle"
                className="font-medium pointer-events-none"
              >
                {city.name}
              </text>
            </motion.g>
          ))}
        </svg>
        <p className="mt-4 text-sm text-muted-foreground font-body">
          Interactive map of {country.name}
        </p>
      </div>
    </motion.div>
  );
};

export default CountryMap;