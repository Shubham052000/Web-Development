export const dynamic = "force-static"; // config variable to make page static explicitly

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

const About = async () => {
  return (
    <main className="h-screen px-20 mt-10">
      <h1 className="text-4xl font-bold mb-6">About</h1>
      <p className="text-lg">
        We are a social media company that wants to bring people together!
      </p>
    </main>
  );
};

export default About;
