import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface Country {
  name: string;
  code: string;
  flag: string;
}

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Link to={`/country/${country.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <Card className="group cursor-pointer overflow-hidden border-2 hover:border-accent hover:shadow-card-hover transition-all duration-300 hover:scale-105 bg-gradient-card">
        <div className="p-4 text-center">
          {/* Flag */}
          <div className="mb-3 flex justify-center">
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-16 h-12 object-cover rounded-md shadow-sm group-hover:shadow-md transition-shadow"
              loading="lazy"
            />
          </div>
          
          {/* Country Name */}
          <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
            {country.name}
          </h3>
        </div>
      </Card>
    </Link>
  );
};

export default CountryCard;