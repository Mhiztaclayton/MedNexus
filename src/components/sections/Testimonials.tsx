
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const testimonials = [
  {
    id: "hospitals",
    label: "Hospitals",
    quotes: [
      {
        text: "MEDNEXUS has transformed our ability to access patient records across departments while maintaining strict security standards.",
        author: "Dr. Victoria Unwah",
        role: "Chief Medical Officer, Bertha Hospital",
      },
      {
        text: "The reduction in administrative overhead has been remarkable. Our staff can focus more on patient care rather than paperwork.",
        author: "Emmanuella Edidiong",
        role: "Hospital Administrator, Bertha Hospital",
      },
    ],
  },
  {
    id: "patients",
    label: "Patients",
    quotes: [
      {
        text: "For the first time, I feel in control of my medical data. I can share my complete medical history with new doctors instantly.",
        author: "Success Ejigwe",
        role: "Patient",
      },
      {
        text: "The peace of mind knowing my sensitive health information is secure but accessible when needed is invaluable.",
        author: "Richard Peter",
        role: "Patient & Healthcare Advocate",
      },
    ],
  },
  {
    id: "researchers",
    label: "Researchers",
    quotes: [
      {
        text: "MEDNEXUS has opened up unprecedented access to anonymized clinical data, accelerating our research on chronic diseases.",
        author: "Dr. Aso Bassey",
        role: "Lead Researcher, Medical Innovation Institute",
      },
      {
        text: "The quality and integrity of data we can now access has significantly improved our research outcomes and publications.",
        author: "Dr. Joyce Essung",
        role: "Clinical Research Director, University Medical School",
      },
    ],
  },
  {
    id: "insurers",
    label: "Insurers",
    quotes: [
      {
        text: "Claims processing that used to take weeks now happens in minutes, with full verification through the blockchain.",
        author: "Mfonobong Etim",
        role: "Claims Manager, HealthGuard Insurance",
      },
      {
        text: "The reduction in fraud and automated verification has allowed us to pass savings directly to our customers.",
        author: "Caroline Akpan",
        role: "COO, MediCover Insurance Group",
      },
    ],
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted Across Healthcare</h2>
          <p className="text-xl text-gray-600">
            See how MEDNEXUS is transforming healthcare data management for organizations and individuals alike.
          </p>
        </div>
        
        <Tabs defaultValue="hospitals" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {testimonials.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="text-base">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {testimonials.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tab.quotes.map((quote, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm"
                  >
                    <div className="mb-4">
                      <svg width="40" height="40" viewBox="0 0 40 40" className="text-medblue-300">
                        <path
                          fill="currentColor"
                          d="M10.8,20.3c0.4-0.7,0.9-1.2,1.6-1.5c0.7-0.4,1.4-0.6,2.2-0.6c1.8,0,3.2,0.6,4.3,1.7c1.1,1.1,1.7,2.5,1.7,4.2c0,1.8-0.7,3.3-2,4.5c-1.3,1.2-2.9,1.9-4.7,1.9c-0.2,0-0.4,0-0.6-0.1c-1.2-2.2-1.9-3.6-2-4.1c-0.4-1.3-0.6-2.7-0.6-4.2c0-1.5,0.2-3,0.6-4.4c0.8-2.5,2.2-4.4,4.2-5.6s4.3-2,6.9-2.3c0.2,0,0.4-0.1,0.4-0.1c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1-0.1,0.3-0.3,0.4c-1.9,1-3.4,2.5-4.5,4.5C16.1,17,15.4,18.9,15,21C13.9,20.8,12.9,20.5,12.8,19.8L10.8,20.3z M26.1,20.3c0.4-0.7,0.9-1.2,1.6-1.5c0.7-0.4,1.4-0.6,2.2-0.6c1.8,0,3.2,0.6,4.3,1.7c1.1,1.1,1.7,2.5,1.7,4.2c0,1.8-0.7,3.3-2,4.5c-1.3,1.2-2.9,1.9-4.7,1.9c-0.2,0-0.4,0-0.6-0.1c-1.2-2.2-1.9-3.6-2-4.1c-0.4-1.3-0.6-2.7-0.6-4.2c0-1.5,0.2-3,0.6-4.4c0.8-2.5,2.2-4.4,4.2-5.6s4.3-2,6.9-2.3c0.2,0,0.4-0.1,0.4-0.1c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1-0.1,0.3-0.3,0.4c-1.9,1-3.4,2.5-4.5,4.5c-1.2,2-1.9,3.9-2.3,6C31.4,20.8,28.2,20.5,28,19.8L26.1,20.3z"
                        />
                      </svg>
                    </div>
                    <blockquote className="text-lg text-gray-700 mb-4">{quote.text}</blockquote>
                    <div>
                      <div className="font-medium text-gray-900">{quote.author}</div>
                      <div className="text-sm text-gray-500">{quote.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
