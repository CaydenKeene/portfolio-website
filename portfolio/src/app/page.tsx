import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white to-gray-100 px-8">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-gray-800">John Doe</h1>
          <p className="mb-6 text-xl text-gray-600">Full Stack Developer</p>
          <button className="rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700">
            Get in touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">About Me</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src="/profile.jpg"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg text-gray-600">
                I'm a passionate developer with experience in building modern web applications.
                I specialize in React, TypeScript, and Node.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-20 px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">My Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group overflow-hidden rounded-lg shadow-lg transition hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={`/project${project}.jpg`}
                    alt={`Project ${project}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">Project Title</h3>
                  <p className="text-gray-600">Brief project description goes here.</p>
                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">React</span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">Node.js</span>
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
          <h2 className="mb-12 text-4xl font-bold text-gray-800">Get In Touch</h2>
          <p className="mb-8 text-lg text-gray-600">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block rounded-full bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
