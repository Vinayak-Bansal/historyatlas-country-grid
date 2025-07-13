import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import CountryCard from "./CountryCard";
import { countries } from "@/data/countries";

const CountryGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = useMemo(() => {
    if (!searchTerm) return countries;
    return countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-card/50 backdrop-blur-sm border-2 focus:border-accent"
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-center">
        <p className="text-muted-foreground">
          Showing {filteredCountries.length} of {countries.length} countries
        </p>
      </div>

      {/* Country Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>

      {/* No Results */}
      {filteredCountries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No countries found matching "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryGrid;