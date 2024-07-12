import Image from "next/image";

export default function Home() {
  return (    
    <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-20 lg:flex-row  xl:px-48">
      {/* Image container */}
      <div className="h-1/2 lg:h-full lg:w-1/2  relative">
        <Image src="/images/hero.png" 
               alt="hero image" 
               className="object-contain "
               width={500}
               height={500}/>
      </div>
      {/* Text Container */}
      <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2">
      {/* Title */}
        <h1 className="md:text-6xl text-4xl font-bold">Web Developer</h1>
        {/* Description */}
        <p className="md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Non, sunt eius corrupti eaque aliquid quaerat voluptatibus et veniam 
           exercitationem voluptate rem quos fugiat! Vitae incidunt sequi cum ex minima dolor. 
           Facilis et maxime quam tempore, pariatur commodi laborum expedita veniam atque nesciunt 
           mollitia incidunt, perferendis neque in reiciendis numquam eos?
        </p>
      
      <div className="flex gap-4 w-full ">
        {/* Buttons */}
        <button className="p-4 rounded-lg ring-black bg-black text-white">This is me</button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
      </div>
      </div>
    </div>
  );
}

