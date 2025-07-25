import { ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { countries } from "@/data/countries";
import Navigation from "@/components/Navigation";

interface CountrySubtabLayoutProps {
  activeTab: "overview" | "periods" | "figures" | "heritage";
  title: string;
  subtitle: string;
  children: ReactNode;
}

const CountrySubtabLayout = ({ activeTab, title, subtitle, children }: CountrySubtabLayoutProps) => {
  const { countryName } = useParams();
  
  const country = countries.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === countryName
  );

  if (!country) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-heading text-heading-md text-foreground mb-4">Country Not Found</h1>
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
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Back Button */}
        <div className="animate-fade-in">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Countries
            </Button>
          </Link>
        </div>

        {/* Country Header */}
        <div className="animate-fade-in">
          <Card className="bg-gradient-card border-2 shadow-card-hover">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-24 h-16 object-cover rounded-lg shadow-vintage"
                />
                <div>
                  <CardTitle className="font-heading text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    {country.name}
                  </CardTitle>
                  <p className="text-muted-foreground font-body">Country Code: {country.code}</p>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="animate-fade-in">
          <Tabs value={activeTab} className="w-full">
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

        {/* Hero Title Section */}
        <div className="animate-fade-in py-8">
          <div className="text-center space-y-4">
            <h1 className="font-heading text-heading-lg text-foreground font-bold">
              {title}
            </h1>
            <p className="font-body text-body text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </div>
          <Separator className="mt-8" />
        </div>

        {/* Content Sections */}
        <div className="animate-fade-in space-y-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CountrySubtabLayout;