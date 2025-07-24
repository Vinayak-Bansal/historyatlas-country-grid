import { motion } from "framer-motion";

interface CountryMapProps {
  country: {
    name: string;
    code: string;
  };
}

const CountryMap = ({ country }: CountryMapProps) => {
  // Simple placeholder map - in a real app you'd use a proper mapping library
  const getMapData = (countryName: string) => {
    const mapData: { [key: string]: any } = {
      "France": {
        viewBox: "0 0 100 100",
        path: "M30,20 Q50,10 70,20 L75,40 Q70,60 50,70 Q30,60 25,40 Z",
        color: "hsl(var(--chart-blue))"
      },
      "Germany": {
        viewBox: "0 0 100 100",
        path: "M40,15 L60,20 L65,35 L70,50 L60,65 L45,70 L35,65 L30,50 L35,35 Z",
        color: "hsl(var(--chart-green))"
      },
      "Japan": {
        viewBox: "0 0 100 100",
        path: "M60,10 L70,15 L75,25 L70,35 L65,45 M45,20 L55,25 L60,35 L55,45 L50,55 M35,30 L45,35 L50,45 L45,55 L40,65 M25,40 L35,45 L40,55 L35,65 L30,75",
        color: "hsl(var(--chart-gray))"
      },
      "United Kingdom": {
        viewBox: "0 0 100 100",
        path: "M45,10 L55,15 L60,25 L55,35 L50,45 L45,55 L40,45 L35,35 L40,25 Z M30,60 L40,65 L45,75 L40,85 L30,80 L25,70 Z",
        color: "hsl(var(--destructive))"
      }
    };
    
    return mapData[countryName] || {
      viewBox: "0 0 100 100",
      path: "M25,25 L75,25 L75,75 L25,75 Z",
      color: "hsl(var(--muted))"
    };
  };

  const mapData = getMapData(country.name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full h-64 md:h-80 flex items-center justify-center bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg p-6"
    >
      <div className="text-center">
        <svg
          width="200"
          height="200"
          viewBox={mapData.viewBox}
          className="drop-shadow-lg"
        >
          <path
            d={mapData.path}
            fill={mapData.color}
            stroke="hsl(var(--border))"
            strokeWidth="1"
            className="transition-all duration-300 hover:opacity-80"
          />
        </svg>
        <p className="mt-4 text-sm text-muted-foreground font-body">
          Interactive map of {country.name}
        </p>
      </div>
    </motion.div>
  );
};

export default CountryMap;