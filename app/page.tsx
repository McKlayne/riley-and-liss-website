"use client"

import { Analytics } from "@vercel/analytics/react"
import Script from "next/script"
import { useState } from "react"

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/images/59ac94fa-3ada-4e99-bf42.jpeg",
      alt: "Riley and Liss smiling together by the water",
    },
    {
      src: "/images/whiting-sunflowers.jpeg",
      alt: "Riley and Liss in their garden with tall sunflowers",
    },
    {
      src: "/images/whiting-nieceandnephew1.jpeg",
      alt: "Riley and Liss with their niece and nephew outdoors",
    },
    {
      src: "/images/whiting-niece-nephew2.jpeg",
      alt: "Riley and Liss with their niece and nephew at home",
    },
    {
      src: "/images/whiting-bread.jpeg",
      alt: "Riley and Liss baking bread together",
    },
    {
      src: "/images/IMG_8953.jpeg",
      alt: "Riley and Liss together outdoors in a field",
    },
    {
      src: "/images/whiting-plants.jpeg",
      alt: "Riley and Liss at a plant sale with fresh herbs and flowers",
    },
    {
      src: "/images/IMG_3522.jpeg",
      alt: "Riley and Liss biking together on a trail",
    },
    {
      src: "/images/hiking.jpeg",
      alt: "Riley and Liss hiking on a mountain with scenic views",
    },
    {
      src: "/images/whiting-blueberries.jpeg",
      alt: "Riley and Liss with freshly picked blueberries",
    },
    {
      src: "/images/IMG_2743.jpeg",
      alt: "Riley and Liss enjoying winter activities together",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <>
      <Analytics />
      <div className="min-h-screen bg-[#FDF8F3] text-[#4A3728]">
        {/* Header */}
        <header className="bg-[#C9A88C] py-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Seeking a Gestational Carrier</h1>
          <p className="text-white/90 mt-1">Help us complete our family</p>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Main Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#8B5E3C] rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#8B5E3C] rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-[#8B5E3C] w-8" : "bg-[#C9A88C] hover:bg-[#8B5E3C]/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 text-center">
            <a href="tel:614-935-2124" className="text-[#8B5E3C] font-semibold hover:underline">
              LISS: 614-935-2124
            </a>
            <a href="tel:435-881-3100" className="text-[#8B5E3C] font-semibold hover:underline">
              RILEY: 435-881-3100
            </a>
          </div>

          {/* About Us */}
          <section className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-[#8B5E3C] mb-4 border-b border-[#C9A88C] pb-2">About Us</h2>
            <p className="mb-4 leading-relaxed">
              Hi, we're Liss and Riley. We've been married for 7 years. Riley works as a college professor and family
              therapist and finds joy in cooking meals that bring people together. Liss works as a conservationist, and
              loves sunshine.
            </p>
            <p className="mb-4 leading-relaxed">
              Together, we cherish the simple joys of life — reading books, dancing, hosting friends, solving
              crosswords, and spending time with our beloved nieces and nephews. Our home has a big, beautiful garden
              where we spend much of our free time. Riley loves growing sunflowers that brighten the yard, while Liss's
              favorite thing to grow is sweet potatoes.
            </p>
            <p className="mb-4 leading-relaxed">
              Now, we're ready to grow our family. Becoming parents has always been a dream of ours. Due to medical
              reasons, Liss is unable to carry a child, but our hearts are full of hope. We're looking for a
              compassionate person who can help us bring our dream of parenthood to life.
            </p>
            <p className="mb-4 leading-relaxed">
              We are offering a stipend of $55,000 to support the gestational carrier through the pregnancy.
            </p>
            <p className="leading-relaxed">
              If you or someone you know might be a good match or if you would like to learn more, please reach out.
              Thank you for taking the time to learn a little about us.
            </p>
          </section>

          {/* Requirements */}
          <section className="bg-[#F5EDE5] rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-[#8B5E3C] mb-4">Basic Carrier Requirements</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A88C] rounded-full"></span>
                Age 21-41
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A88C] rounded-full"></span>
                Carried at least 1 child without complications
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A88C] rounded-full"></span>
                Good physical & mental health
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#C9A88C] rounded-full"></span>
                Located in Ohio (preferably)
              </li>
            </ul>
          </section>

          {/* Steps */}
          <section className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-[#8B5E3C] mb-6 border-b border-[#C9A88C] pb-2">
              Steps to Becoming a Gestational Carrier
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#C9A88C] pl-4">
                <h3 className="font-bold text-[#8B5E3C]">1. Meet Each Other</h3>
                <p className="text-sm mt-1 leading-relaxed">
                  We want to get to know each other first. We'd love to talk, answer any questions you may have (e.g.,
                  about us, payment, timeline, insurance etc.) and see if this is something that would work for both of
                  us.
                </p>
              </div>

              <div className="border-l-4 border-[#C9A88C] pl-4">
                <h3 className="font-bold text-[#8B5E3C]">2. Medical</h3>
                <ul className="text-sm mt-1 space-y-2 leading-relaxed">
                  <li>
                    The gestational carrier (GC) completes a virtual medical interview with our doctor, a
                    board-certified reproductive endocrinologist and infertility specialist.
                  </li>
                  <li>GC completes an in person medical screening at Pinnacle Fertility (Columbus or Akron, OH)</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#C9A88C] pl-4">
                <h3 className="font-bold text-[#8B5E3C]">3. Psychological</h3>
                <ul className="text-sm mt-1 space-y-2 leading-relaxed">
                  <li>
                    The GC does a gestational carrier interview and evaluation with a licensed mental health
                    professional to ensure that she is emotionally healthy and ready to go through the process of
                    pregnancy.
                  </li>
                  <li>We will undergo a similar psychological screening.</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#C9A88C] pl-4">
                <h3 className="font-bold text-[#8B5E3C]">4. Legal</h3>
                <p className="text-sm mt-1 leading-relaxed">
                  We work together to write a contract that protects the GC and the child that the GC will carry and
                  ensures that we comply with state laws. The contract will also finalize the terms of financial,
                  physical, and emotional support that we have agreed on. We will pay for a licensed attorney of the
                  GC's choosing to represent her throughout this process.
                </p>
              </div>

              <div className="border-l-4 border-[#C9A88C] pl-4">
                <h3 className="font-bold text-[#8B5E3C]">5. Transfer</h3>
                <ul className="text-sm mt-1 space-y-2 leading-relaxed">
                  <li>
                    Once the screenings are complete and the legal contract is signed, we will move forward with embryo
                    transfer.
                  </li>
                  <li>
                    We have already gone through the IVF process and have frozen embryos that are ready for transfer.
                  </li>
                  <li>
                    The gestational carrier will take fertility medicine to prepare her uterus for an embryo. Then the
                    embryo is implanted into the gestational carrier's uterus.
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-[#C9A88C] pl-4">
                <h3 className="font-bold text-[#8B5E3C]">6. Pregnancy</h3>
                <ul className="text-sm mt-1 space-y-2 leading-relaxed">
                  <li>The GC receives routine prenatal care throughout the pregnancy.</li>
                  <li>Open communication between us and the GC throughout the pregnancy.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* GoFundMe Section */}
          <section className="bg-[#F5EDE5] rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-[#8B5E3C] mb-4">Other Ways to Help</h2>
            <p className="mb-4 leading-relaxed">
              If you'd like to support our journey to parenthood but can't participate as a gestational carrier, a
              GoFundMe has been setup for us to help cover the medical and legal costs associated with surrogacy and
              IVF.
            </p>
            <div className="flex justify-center">
              <a
                href="https://gofund.me/49b0366ae"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8B5E3C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6B4A2C] transition-colors"
              >
                Support Our Journey
              </a>
            </div>
          </section>

          {/* Footer Contact */}
          <footer className="text-center mt-8 py-6 border-t border-[#C9A88C]">
            <p className="font-semibold mb-2">Reach out to us:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:614-935-2124" className="text-[#8B5E3C] font-semibold hover:underline">
                Liss: 614-935-2124
              </a>
              <a href="tel:435-881-3100" className="text-[#8B5E3C] font-semibold hover:underline">
                Riley: 435-881-3100
              </a>
            </div>
          </footer>
        </main>
      </div>
      <Script src="https://www.gofundme.com/static/js/embed.js" strategy="lazyOnload" />
    </>
  )
}
