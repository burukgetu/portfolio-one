/* eslint-disable react/prop-types */


function Sidebar({ scrollToProject, activeProject }) {
  return (
    <div className="w-full flex justify-center gap-6 items-center">
      <div className="w-[80%] h-full flex flex-col items-center justify-start">
        <h1 className="mt-4 text-5xl">Projects</h1>
        <div className="flex flex-col gap-4 mt-12">
          {['AdventureHub', 'Coursednet', 'ShopSavvy', 'AppleClone', 'Landvibe'].map((project) => (
            <p
              key={project}
              onClick={() => scrollToProject(project)}
              className={`text-4xl tracking-wide cursor-pointer ${activeProject === project ? 'font-bold' : 'font-[300]'}`}
            >
              {project}
            </p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600 w-1 h-[90%] self-end"></div>
    </div>
  );
}

export default Sidebar
