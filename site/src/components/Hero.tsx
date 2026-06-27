import React from 'react'

export default function Hero() {
  return (
    <section className="rounded-xl p-8 bg-gradient-to-br from-gray-800 via-gray-700 to-black text-white shadow-lg">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Rajat Mahajan</h1>
          <p className="mt-2 text-lg text-gray-200 max-w-2xl">Software Engineer — Java · Python · AWS · Distributed Systems · AI</p>

          <p className="mt-4 max-w-2xl text-gray-300">
            I build scalable backend systems, cloud-native applications, distributed platforms, and AI-powered developer tools that solve real production problems.
          </p>

          <div className="mt-6 flex gap-3">
            <a className="px-4 py-2 rounded-md bg-primary text-white" href="#">Resume</a>
            <a className="px-4 py-2 rounded-md border border-gray-200 text-white/90" href="https://github.com/rajatmahajan23" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
          <img src="/img/profile.jpg" alt="Rajat Mahajan" className="w-40 h-40 rounded-full ring-2 ring-white shadow-lg" />
        </div>
      </div>
    </section>
  )
}
