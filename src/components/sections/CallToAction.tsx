
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-medblue-50 to-medteal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Healthcare Data Management?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hospitals, patients, and researchers already benefiting from MEDNEXUS's blockchain-powered platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              {
                title: "For Providers",
                description: "Streamline access to patient data across departments and institutions",
              },
              {
                title: "For Patients",
                description: "Take control of your health data and manage access permissions",
              },
              {
                title: "For Researchers",
                description: "Access anonymized health data for breakthrough research",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-medblue-500 to-medteal-500 text-white">
              Request a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-medblue-500 text-medblue-600">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
