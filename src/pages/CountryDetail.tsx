import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Globe, Clock, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { countries } from "@/data/countries";
import Navigation from "@/components/Navigation";

const CountryDetail = () => {
  const { countryName } = useParams();
  
  const country = countries.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === countryName
  );

  if (!country) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Country Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The country you're looking for doesn't exist in our database.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Countries
            </Button>
          </Link>
        </div>

        {/* Country Header */}
        <div className="mb-8">
          <Card className="bg-gradient-card border-2">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-24 h-16 object-cover rounded-lg shadow-vintage"
                />
                <div>
                  <CardTitle className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    {country.name}
                  </CardTitle>
                  <p className="text-muted-foreground">Country Code: {country.code}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Navigation Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <Link to={`/country/${countryName}/overview`}>
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>A Complete History of {country.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trace the development of {country.name} through time, wars, revolutions, alliances, and reforms—through 
                  visual timelines, detailed narratives, dynamic graphs, and interactive maps
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to={`/country/${countryName}/periods`}>
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Key Historical Periods</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Discover the timeline of important historical periods and eras that 
                  defined {country.name}'s journey through time.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to={`/country/${countryName}/figures`}>
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Notable Historical Figures</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn about the remarkable people who influenced {country.name}'s history, 
                  from rulers and leaders to scholars and cultural icons.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to={`/country/${countryName}/heritage`}>
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:scale-105 cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Cultural Heritage</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Explore {country.name}'s rich cultural heritage, UNESCO sites, 
                  traditions, and historical monuments.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;