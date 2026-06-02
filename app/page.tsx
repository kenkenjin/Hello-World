/**
 * Home Page Component
 * 
 * This is the main page of the application, displayed at the root route (/).
 * It renders a centered "Hello, World!" message with a description and interactive button.
 */
export default function Home() {
  /**
   * Handle button click event
   * This function is triggered when the user clicks the "Learn More" button
   */
  const handleLearnMore = () => {
    alert('Welcome to Hello World! 🚀\n\nThis is a simple Next.js 14 application with vanilla CSS.')
  }

  return (
    <main className="container">
      {/* Content wrapper - centers content and applies animations */}
      <div className="content">
        {/* Main title - with slide down animation */}
        <h1 className="title">
          Hello, World! 👋
        </h1>

        {/* Description text - with fade in animation */}
        <p className="description">
          Welcome to this simple Hello World website built with Next.js 14 (App Router) 
          and vanilla CSS. Experience smooth animations, responsive design, and clean code 
          without any heavy UI frameworks.
        </p>

        {/* Interactive button - with hover effects */}
        <button 
          className="button" 
          onClick={handleLearnMore}
          aria-label="Learn more about this project"
        >
          Learn More
        </button>
      </div>
    </main>
  )
}
