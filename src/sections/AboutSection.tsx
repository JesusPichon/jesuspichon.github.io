import Label from "../components/Label";

function AboutSection() {
  return (
    <div className="bg-gradient-to-r from-[#051D35] to-[#050E17] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Text */}
        <div>
          <div className="w-25 my-2">
            <Label>Contact</Label>
          </div>
          <h2 className="text-white text-3xl font-bold mb-4">Get in touch today!</h2>
          <p className="text-white text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint a dolor non
            laudantium ea recusandae provident aperiam minima, doloremque doloribus.
          </p>
        </div>

        {/* Right Section - Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-white mb-1">Name</label>
            <input
              type="text"
              className="p-2 rounded bg-white/10 text-white placeholder:text-gray-300"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              className="p-2 rounded bg-white/10 text-white placeholder:text-gray-300"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col sm:col-span-1">
            <label className="text-white mb-1">Phone</label>
            <input
              type="tel"
              className="p-2 rounded bg-white/10 text-white placeholder:text-gray-300"
              placeholder="(123) 456-7890"
            />
          </div>

          <div className="flex flex-col sm:col-span-1">
            <label className="text-white mb-1">Subject</label>
            <input
              type="text"
              className="p-2 rounded bg-white/10 text-white placeholder:text-gray-300"
              placeholder="Message subject"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="text-white mb-1">Message</label>
            <textarea
              id="message"
              rows={5}
              className="p-2 rounded bg-white/10 text-white placeholder:text-gray-300 resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div>
            <input 
              className="bg-blue-600 text-white px-6 py-2 rounded-full transition transform hover:bg-blue-700 hover:scale-105 duration-200 cursor-pointer mb-6" 
              type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AboutSection;
