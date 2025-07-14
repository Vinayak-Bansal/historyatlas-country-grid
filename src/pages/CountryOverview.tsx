import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { countries } from "@/data/countries";
import Navigation from "@/components/Navigation";

const CountryOverview = () => {
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

        {/* Navigation Tabs */}
        <div className="mb-8">
          <Tabs value="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" asChild>
                <Link to={`/country/${countryName}/overview`}>Overview</Link>
              </TabsTrigger>
              <TabsTrigger value="periods" asChild>
                <Link to={`/country/${countryName}/periods`}>Historical Periods</Link>
              </TabsTrigger>
              <TabsTrigger value="figures" asChild>
                <Link to={`/country/${countryName}/figures`}>Notable Figures</Link>
              </TabsTrigger>
              <TabsTrigger value="heritage" asChild>
                <Link to={`/country/${countryName}/heritage`}>Cultural Heritage</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Overview Content */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className = "Hello">A Complete History of {country.name}</CardTitle>
          </CardHeader>
          <CardContent>
            {country.historicalOverview && country.historicalOverview.length > 0 ? (
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {country.historicalOverview.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            ) : (
              <div>
                <p className="text-muted-foreground mb-4">
                  This is the historical overview page for {country.name}. You can add detailed information about:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Major historical events and milestones</li>
                  <li>Significant developments in the country's history</li>
                  <li>Ancient civilizations and early settlements</li>
                  <li>Colonial period and independence movements</li>
                  <li>Modern political and social developments</li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CountryOverview;