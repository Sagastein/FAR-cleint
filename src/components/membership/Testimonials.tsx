import { BrainCog } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  logo?: string;
}

const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => (
  <div className="bg-primary p-4 text-sm rounded-lg">
    <p className="text-white mb-4">{quote}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://ui-avatars.com/api/?name=John+Doe&size=80"
          alt={author}
          className="rounded-full h-8 w-8"
        />
        <div>
          <p className="text-secondary font-medium">{author}</p>
          <p className="text-gray-400 text-sm">{company}</p>
        </div>
      </div>
      {/* <img src={logo} alt={company} className="h-8" /> */}
      <BrainCog size={24} className="text-white" />
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Joining the Rwanda FinTech Association gave us unparalleled access to networking opportunities and regulatory insights.",
      author: "Alex Martinez",
      company: "Director of Fresh Ideas Café",
      logo: "https://ui-avatars.com/api/?name=John+Doe&size=80",
    },
    {
      quote:
        "The association's advocacy efforts have created a thriving FinTech ecosystem for innovation and investment.",
      author: "Emily Rogers",
      company: "CEO at Acme Corp",
      logo: "https://ui-avatars.com/api/?name=John+Doe&size=80",
    },
  ];

  return (
    <div className="bg-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
