import React from "react";

function Blogs() {
  return (
    <div className="px-4 md:px-8 py-12">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-left">
          Snap photos and share like
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-left">
          never before
        </h1>
      </div>

      <div className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-12">
          {" "}
          {/* Increased gap between cards */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-medium mb-4">Sed ut perspiciatis</h1>
            <p className="text-gray-600 mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est.
            </p>
            <button className="px-6 py-3 bg-blue-400 text-white border-2 border-blue-400 rounded-md text-lg transition hover:bg-white hover:text-blue-400">
              Learn more
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-medium mb-4">Sed ut perspiciatis</h1>
            <p className="text-gray-600 mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est.
            </p>
            <button className="px-6 py-3 bg-blue-400 text-white border-2 border-blue-400 rounded-md text-lg transition hover:bg-white hover:text-blue-400">
              Learn more
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-12">
          {" "}
          {/* Increased gap between cards */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-medium mb-4">Sed ut perspiciatis</h1>
            <p className="text-gray-600 mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est.
            </p>
            <button className="px-6 py-3 bg-blue-400 text-white border-2 border-blue-400 rounded-md text-lg transition hover:bg-white hover:text-blue-400">
              Learn more
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-medium mb-4">Sed ut perspiciatis</h1>
            <p className="text-gray-600 mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est.
            </p>
            <button className="px-6 py-3 bg-blue-400 text-white border-2 border-blue-400 rounded-md text-lg transition hover:bg-white hover:text-blue-400">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
