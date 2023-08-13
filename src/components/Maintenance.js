const MaintenancePage = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-lg">
            <img className="w-44 text-center" src="logo.png" alt="Logo" />
          <h1 className="text-2xl font-semibold mb-4">Site Under Maintenance</h1>
          <p className="text-gray-600">
            We are currently working on improving our website to serve you better.
            Please check back later.
          </p>
          <div className="mt-6">
            <p className="text-gray-600">Contact us:</p>
            <div className="mt-2">
                Email: <a
                href="mailto:Atlarus.ent@gmail.com"
                className="text-blue-500 hover:underline mr-3"
                >
                Atlarus.ent@gmail.com
                </a><br/>
                Instagram: <a
                href="https://www.instagram.com/atlarusenterprise/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-3"
                >
                @atlarusenterprise
                </a><br />
                LinkedIn: <a
                href="https://www.linkedin.com/company/atlarus-enterprise/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
                >
                Atlarus Enterprise
                </a>
            </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default MaintenancePage;