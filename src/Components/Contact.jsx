import React from "react";


const Contact = () => {
  return (
    <div id="contact" className="relative w-full py-10 px-4 md:px-8">
    {/* Background Map */}
    <img 
      src="./assets/maps.svg" 
      className="absolute top-0 left-0 right-0 w-full h-full object-cover -z-10" 
      alt="Map background"
    />
    
    {/* Contact Form Card */}
    <div className="max-w-4xl mx-auto mt-8 md:mt-36 bg-white rounded-lg shadow-xl">
      <div className="p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl text-black text-center font-bold mb-8">
          Get in <span className="text-[#F8A400]">MyCheva</span>
        </h1>

        <form className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">Name</label>
                <input 
                  type="text" 
                  placeholder="Lorem Ipsum" 
                  className="w-full border-b-2 border-black pb-2 text-black font-medium focus:outline-none focus:border-[#F8A400] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">Email</label>
                <input 
                  type="email" 
                  placeholder="LoremIpsum@mail.com" 
                  className="w-full border-b-2 border-black pb-2 text-black font-medium focus:outline-none focus:border-[#F8A400] transition-colors"
                />
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">Phone</label>
                <input 
                  type="tel" 
                  placeholder="+0 968 856 1524" 
                  className="w-full border-b-2 border-black pb-2 text-black font-medium focus:outline-none focus:border-[#F8A400] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm">Subject</label>
                <select 
                  className="w-full border-b-2 border-black pb-2 text-black font-medium focus:outline-none focus:border-[#F8A400] transition-colors appearance-none bg-transparent"
                  defaultValue="general"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button 
                type="submit"
                className="px-8 py-3 bg-[#F8A400] text-white font-medium rounded-md hover:bg-black focus:bg-black transition-colors duration-200"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
