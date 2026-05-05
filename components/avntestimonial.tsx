"use client";
const TestimonialCard = ({ 
  name = "Reviewer's Name",
  title = "Reviewer's Title",
  testimonial = "This is a glowing testimonial! I absolutely loved the product/service. It exceeded my expectations in every way. I highly recommend it to anyone looking for a top-notch experience.",
  rating = 5
}) => {
  return (
    <div className="bg-white max-w-md border border-[#88be22] p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:scale-105">
      <div className="mb-4">
        <div>
          <h4 className="text-lg font-semibold text-[#014214]">
            {name}
          </h4>
          <p className="text-[#88be22]">
            {title}
          </p>
        </div>
      </div>
      <p className="text-[#014214] text-base leading-relaxed">
        "{testimonial}"
      </p>
      <div className="mt-6">
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

const AvntestimonialSection = () => {
  const testimonials = [
    {
      name: "Ravi S.",
      title: "42 yrs, Mumbai",
      testimonial: "My MRI showed early-stage AVN after COVID treatment. I was terrified of surgery, but at AVN Arogya, Dr. Varier's 3-week Panchakarma + Physiotherapy plan brought my movement back. I'm walking normally now.",
      rating: 5
    },
    {
      name: "Kavitha M.",
      title: "38 yrs, Madurai",
      testimonial: "Doctors elsewhere told me hip replacement was the only option. Here, my stiffness and pain reduced drastically within a month. MRI after treatment showed clear improvement.",
      rating: 5
    },
    {
      name: "Suresh B.",
      title: "50 yrs, Coimbatore",
      testimonial: "I'd been on steroids for arthritis for years. Pain spread to my hip, diagnosed as AVN. The integrated therapy here reduced pain and swelling quickly — no side effects, no fear.",
      rating: 5
    },
    {
      name: "Meena R.",
      title: "45 yrs, Bengaluru",
      testimonial: "My hip pain was unbearable post-COVID. At AVN Arogya, the Panchakarma and Physiotherapy sessions strengthened my hip. Within three weeks, I returned to work pain-free.",
      rating: 5
    },
    {
      name: "Anil K.",
      title: "37 yrs, Pune",
      testimonial: "I came with stage-2 AVN and severe limping. After continuous therapy, the blood flow improved, and my latest scans show stability. Grateful to the team for saving my joint.",
      rating: 5
    }
  ];

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 5);

  return (
    <>
       <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    <div className="bg-white py-6" style={{fontFamily: "'Outfit', sans-serif" }}>
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
           <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#114520] max-[470px]:mb-5 mb-10">
            Patient <span className="text-[#f05623]">Testimonials</span>
          </h2>
          </div>
        
        {/* First Row - 3 cards */}
        <div className="flex justify-center flex-wrap gap-8 mb-8">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Second Row - 2 cards centered */}
        <div className="flex justify-center flex-wrap gap-8">
          {secondRow.map((testimonial, index) => (
            <TestimonialCard
              key={index + 3}
              name={testimonial.name}
              title={testimonial.title}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

const StarRating = ({ rating = 5 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      aria-hidden="true"
      className={`w-5 h-5 ${index < rating ? 'text-[#f05623]' : 'text-[#80c141]'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ));

  return (
    <div className="flex items-center">
      {stars}
      <span className="text-[#014214] ml-2">{rating}.0</span>
    </div>
  );
};

export default AvntestimonialSection;