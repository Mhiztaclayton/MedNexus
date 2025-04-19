
import { 
  Database, 
  FileCheck, 
  HeartHandshake, 
  Link, 
  Lock, 
  Search, 
  Shield, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: <Shield className="h-6 w-6 text-medblue-500" />,
    title: "Decentralized EHRs",
    description: "Store medical records securely on blockchain, ensuring privacy while maintaining accessibility.",
  },
  {
    icon: <Lock className="h-6 w-6 text-medblue-500" />,
    title: "Patient-Controlled Access",
    description: "Patients determine who can view their medical data with granular permission controls.",
  },
  {
    icon: <Link className="h-6 w-6 text-medblue-500" />,
    title: "System Interoperability",
    description: "Seamlessly connect with existing healthcare systems and databases.",
  },
  {
    icon: <Shield className="h-6 w-6 text-medblue-500" />,
    title: "Advanced Security",
    description: "Multi-layered encryption and authentication protects sensitive health information.",
  },
  {
    icon: <Database className="h-6 w-6 text-medblue-500" />,
    title: "Data Standardization",
    description: "Unified data formats enable efficient exchange between healthcare providers.",
  },
  {
    icon: <Search className="h-6 w-6 text-medblue-500" />,
    title: "Research Analytics",
    description: "Anonymized data access for medical research while maintaining patient privacy.",
  },
  {
    icon: <FileCheck className="h-6 w-6 text-medblue-500" />,
    title: "Supply Chain Tracking",
    description: "Verify authenticity of medications and medical supplies in real-time.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-medblue-500" />,
    title: "Insurance Integration",
    description: "Streamline claims processing with automated verification and smart contracts.",
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Healthcare with Blockchain</h2>
          <p className="text-xl text-gray-600">
            Our comprehensive platform provides the tools needed to revolutionize health data management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-medblue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
