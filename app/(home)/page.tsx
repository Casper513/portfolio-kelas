import React from 'react'
import OurSkill from "@/app/_components/portfolio/OurProject.card";
import About from "@/app/_components/portfolio/About";
import Contact from "@/app/_components/portfolio/Contact.card";
import SkillCardsGrid from "@/app/_components/portfolio/skillCardsGrid";
import Utama  from "@/app/_components/portfolio/Home.components";
import BioData from "@/app/_components/portfolio/BioData";
import Nav from '../_components/portfolio/Navbar.components';
import Footer from '../_components/portfolio/Footer.card';

const skillCardsData = [
  {
    title: 'Design',
    description: 'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
    icon: (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="presentation"
        viewBox="0 0 24 24"
        width="24"
        className="text-pink-500"
      >
        <path
          d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        ></path>
        <path
          d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
  },
  {
    title: 'Database',
    description: 'Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classNamees in your bundle.',
    icon: (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="presentation"
        viewBox="0 0 24 24"
        width="24"
        className="text-pink-500"
      >
        <path
          d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        ></path>
      </svg>
    ),
  },
  {
    title: 'HTML, CSS, JS',
    description: 'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
    icon: (
      <svg
        focusable="false"
        height="24"
        role="presentation"
        viewBox="0 0 24 24"
        width="24"
        className="text-pink-500"
      >
        <path
          d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    title: 'PHP',
    description: 'NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.',
    icon: (
      <svg
        fill="none"
        focusable="false"
        height="24"
        role="presentation"
        viewBox="0 0 24 24"
        width="24"
        className="text-pink-500"
      >
        <path
          d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h6c3.37 0 4.21.84 4.21 4.21v.48M21.95 17.79c0 3.37-.84 4.21-4.21 4.21h-6c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h6c3.37 0 4.21.84 4.21 4.21v6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
        ></path>
      </svg>
    ),
  },
];

const main = () => {
  return (
    <>
        <div className='relative flex flex-col'>
        <Nav/>
        <section className="flex flex-col items-center justify-center">
          <Utama />
        <section className="flex flex-col gap-8">
            <h2 className="text-lg font-bold underline">
              Our skill
            </h2>
            <SkillCardsGrid data={skillCardsData} />
        </section>
        </section>
        <section className="relative z-10 flex flex-col gap-2 w-full mt-24 lg:mt-56">
          <BioData />
          <OurSkill />
          <About />
          <Contact />
        </section>
        <Footer/>
        </div>

    </>
  )
}

export default main