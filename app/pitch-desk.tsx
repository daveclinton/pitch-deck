"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PitchDeck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentDate = "JUNE 13, 2025";

  // Simple functions to go to next/previous slide
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: any) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  // Handle touch/swipe navigation
  let startX = 0;

  const handleTouchStart = (e: any) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: any) => {
    const endX = e.changedTouches[0].clientX;
    const difference = startX - endX;

    // If swipe is more than 50px, change slide
    if (difference > 50) nextSlide(); // Swipe left = next slide
    if (difference < -50) prevSlide(); // Swipe right = previous slide
  };

  // All the slides (removed the agenda slide)
  const slides = [
    // Title Slide
    <div
      key="title"
      className="w-full h-full bg-[#FF5D3B] flex flex-col justify-center relative p-4 md:p-8 lg:p-12"
    >
      <div className="absolute left-2 md:left-6 top-1/4 flex flex-col space-y-2">
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
      </div>
      <div className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black leading-none text-black">
        PITCH
        <br />
        DECK
      </div>
      <div className="absolute left-4 md:left-12 bottom-16 md:bottom-32 space-y-2 md:space-y-4">
        <p className="text-base md:text-xl lg:text-2xl font-medium">
          — DAVECLINTONS AGENCY
        </p>
      </div>
      <div className="absolute right-4 md:right-12 top-4 md:top-12">
        <p className="text-base md:text-xl lg:text-2xl font-medium">
          {currentDate}
        </p>
      </div>
    </div>,

    // About Me Slide
    <div
      key="about"
      className="w-full h-full bg-[#FF5D3B] flex flex-col justify-center p-4 md:p-8 lg:p-12"
    >
      <div className="absolute left-2 md:left-6 top-1/4 flex flex-col space-y-2">
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
      </div>
      <h2 className="text-black text-[10vw] md:text-[8vw] font-black mb-4 md:mb-8">
        ABOUT ME
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <div className="space-y-4 md:space-y-6">
          <p className="text-base md:text-xl lg:text-2xl">
            I'm David Clinton. I enjoy building things that are clear, fast, and
            actually useful.
          </p>
          <p className="text-base md:text-xl lg:text-2xl">
            I care about making tech easy to understand, scalable, and feel a
            little more human.
          </p>
        </div>
        <div className="bg-black/10 p-4 md:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
            At a glance
          </h3>
          <ul className="space-y-2 md:space-y-3 text-base md:text-lg lg:text-xl">
            <li>• Frontend & Full-stack Development</li>
            <li>• Clean Code & Good Design</li>
            <li>• Technical Documentation</li>
            <li>• User Experience Focus</li>
          </ul>
        </div>
      </div>
    </div>,

    // Experience Slide
    <div
      key="experience"
      className="w-full h-full bg-[#00A99D] flex flex-col justify-center p-4 md:p-8 lg:p-12"
    >
      <div className="absolute left-2 md:left-6 top-1/4 flex flex-col space-y-2">
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
      </div>
      <h2 className="text-black text-[10vw] md:text-[8vw] font-black mb-4 md:mb-8">
        EXPERIENCE
      </h2>
      <div className="space-y-4 md:space-y-8 overflow-y-auto max-h-[60vh] md:max-h-none pr-2">
        <div className="bg-black/10 p-4 md:p-6 rounded-lg">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            Paperspace (Digital Ocean)
          </h3>
          <p className="text-base md:text-lg lg:text-xl">
            Building machine learning projects and technical documentation
          </p>
        </div>
        <div className="bg-black/10 p-4 md:p-6 rounded-lg">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            Untapped Global
          </h3>
          <p className="text-base md:text-lg lg:text-xl">
            Frontend Engineer — Investment platform for high net worth
            individuals
          </p>
        </div>
        <div className="bg-black/10 p-4 md:p-6 rounded-lg">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold">
            Independent Consultant
          </h3>
          <p className="text-base md:text-lg lg:text-xl">
            Working with teams at the intersection of clean code, good design,
            and strong documentation
          </p>
        </div>
      </div>
    </div>,

    // Projects Slide
    <div
      key="projects"
      className="w-full h-full bg-[#C69C6D] flex flex-col justify-center p-4 md:p-8 lg:p-12"
    >
      <div className="absolute left-2 md:left-6 top-1/4 flex flex-col space-y-2">
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
      </div>
      <h2 className="text-black text-[10vw] md:text-[8vw] font-black mb-4 md:mb-8">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto max-h-[60vh] md:max-h-none pr-2">
        <div className="bg-black/10 p-4 md:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
            Snaplist
          </h3>
          <p className="text-base md:text-lg lg:text-xl mb-2 md:mb-4">
            (In Development)
          </p>
          <p className="text-sm md:text-base lg:text-xl">
            Third-party mobile marketplace app for sellers on platforms like
            eBay and Facebook Marketplace
          </p>
        </div>
        <div className="bg-black/10 p-4 md:p-8 rounded-lg">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
            Milner Fresh
          </h3>
          <p className="text-sm md:text-base lg:text-xl">
            Online marketplace for exporting fresh produce globally
          </p>
        </div>
        <div className="bg-black/10 p-4 md:p-8 rounded-lg md:col-span-2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
            GiveSuite
          </h3>
          <p className="text-sm md:text-base lg:text-xl">
            Fundraising funnels and donation forms for nonprofits — making it
            easier for organizations to raise money and tell their stories
          </p>
        </div>
      </div>
    </div>,

    // Services Slide
    <div
      key="services"
      className="w-full h-full bg-[#E94E77] flex flex-col justify-center p-4 md:p-8 lg:p-12"
    >
      <div className="absolute left-2 md:left-6 top-1/4 flex flex-col space-y-2">
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
      </div>
      <h2 className="text-black text-[10vw] md:text-[8vw] font-black mb-4 md:mb-8">
        SERVICES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto max-h-[60vh] md:max-h-none pr-2">
        <div className="bg-black/10 p-4 md:p-8 rounded-lg">
          <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4">
            Frontend Development
          </h3>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base lg:text-xl">
            <li>• Responsive web applications</li>
            <li>• Interactive user interfaces</li>
            <li>• Performance optimization</li>
          </ul>
        </div>
        <div className="bg-black/10 p-4 md:p-8 rounded-lg">
          <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4">
            Full-Stack Solutions
          </h3>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base lg:text-xl">
            <li>• End-to-end application development</li>
            <li>• API integration</li>
            <li>• Database architecture</li>
          </ul>
        </div>
        <div className="bg-black/10 p-4 md:p-8 rounded-lg">
          <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4">
            Technical Documentation
          </h3>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base lg:text-xl">
            <li>• Clear, concise documentation</li>
            <li>• Developer guides</li>
            <li>• User manuals</li>
          </ul>
        </div>
        <div className="bg-black/10 p-4 md:p-8 rounded-lg">
          <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-2 md:mb-4">
            Consulting
          </h3>
          <ul className="space-y-1 md:space-y-2 text-sm md:text-base lg:text-xl">
            <li>• Code reviews</li>
            <li>• Architecture planning</li>
            <li>• Team training</li>
          </ul>
        </div>
      </div>
    </div>,

    // Contact Slide
    <div
      key="contact"
      className="w-full h-full bg-black flex flex-col justify-center p-4 md:p-8 lg:p-12"
    >
      <div className="absolute left-2 md:left-6 top-1/4 flex flex-col space-y-2">
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
        <div className="w-3 md:w-6 h-6 md:h-12 bg-[#E8D8C9] rounded-r-full"></div>
      </div>
      <h2 className="text-white text-[10vw] md:text-[8vw] font-black mb-6 md:mb-12">
        LET'S TALK
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div>
          <h3 className="text-[#FF5D3B] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Get in Touch
          </h3>
          <div className="space-y-2 md:space-y-4 text-white text-base md:text-lg lg:text-xl">
            <p>DAVECLINTONN33@GMAIL.COM</p>
            <p>DAVECLINTONS AGENCY</p>
          </div>
        </div>
        <div>
          <h3 className="text-[#00A99D] text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Find Me Online
          </h3>
          <div className="space-y-2 md:space-y-4 text-white text-base md:text-lg lg:text-xl">
            <a
              href="https://x.com/daveclintonn"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#FF5D3B] transition-colors"
            >
              Twitter (X)
            </a>
            <a
              href="https://github.com/daveclinton"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#00A99D] transition-colors"
            >
              Github Projects
            </a>
            <a
              href="https://www.linkedin.com/in/clintondavid46/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-[#C69C6D] transition-colors"
            >
              LinkedIn profile
            </a>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      tabIndex={0} // Makes the div focusable for keyboard events
    >
      {/* Show the current slide */}
      {slides[currentSlide]}

      {/* Navigation buttons */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex space-x-2 md:space-x-4 z-10">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 md:p-3 rounded border border-white/30 text-white disabled:opacity-50 bg-white/20 backdrop-blur-sm hover:bg-white/30"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-2 md:p-3 rounded border border-white/30 text-white disabled:opacity-50 bg-white/20 backdrop-blur-sm hover:bg-white/30"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 text-white/70 text-sm md:text-base">
        <p>
          {currentSlide + 1} / {slides.length}
        </p>
      </div>
    </div>
  );
}
