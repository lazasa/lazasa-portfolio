export default function Home() {
  return (
    <>
      <nav className="w-full min-h-[5vh] pt-8 grid place-content-center">
        {/* Navigation content will go here */}
      </nav>
      
      <main className="home">
        <header className="my-8 text-center">
          <h1 className="text-4xl text-violet font-bold mb-2">Lazasa Portfolio</h1>
          <h2 className="text-xl text-paragraphText">Welcome to my personal portfolio and blog</h2>
        </header>
        
        {/* Content will go here */}
        
      </main>
      
      <footer className="social-links-footer">
        <div className="social-links">
          {/* Social links will go here */}
        </div>
      </footer>
    </>
  );
}
