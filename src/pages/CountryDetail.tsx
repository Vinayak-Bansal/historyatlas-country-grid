import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Globe } from "lucide-react";
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

        {/* Historical Information Placeholder */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Historical Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Historical information for {country.name} will be displayed here. 
                This section will include major historical events, periods, and 
                significant developments in the country's history.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader>
              <CardTitle>Key Historical Periods</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Timeline of important historical periods and eras for {country.name} 
                will be shown here, including dates and brief descriptions of each period.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader>
              <CardTitle>Notable Historical Figures</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Information about important historical figures from {country.name} 
                including rulers, leaders, scholars, and other significant personalities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader>
              <CardTitle>Cultural Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Details about {country.name}'s cultural heritage, traditions, 
                historical artifacts, and UNESCO World Heritage sites.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;