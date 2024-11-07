import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-8">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Cayden Keene</h1>
          <p className="mb-6 text-xl text-purple-200">Computer Science Student at the University of Florida</p>
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-white transition-all hover:scale-105 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/30">
            Get in touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About Me</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-2xl md:h-auto border-2 border-purple-500/30 shadow-lg shadow-purple-500/20">
              {/*
              <Image
                src="/profile.jpg"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              */}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-purple-200">
                I'm a passionate developer with experience in building modern web applications.
                I specialize in React, TypeScript, and Node.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">My Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/30 transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                {/*}
                <div className="relative h-48">
                  <Image
                    src={`/project${project}.jpg`}
                    alt={`Project ${project}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-purple-200">Project Title</h3>
                  <p className="text-purple-300">Brief project description goes here.</p>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 text-sm text-purple-200 border border-purple-500/30">React</span>
                    <span className="rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-3 py-1 text-sm text-purple-200 border border-purple-500/30">Node.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Get In Touch</h2>
          <p className="mb-8 text-lg text-purple-200">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a
            href="mailto:cayden@keenefl.com"
            className="inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-white transition-all hover:scale-105 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
