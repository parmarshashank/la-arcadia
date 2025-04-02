export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/60 mb-4 md:mb-0">
            SYSTEM.COPYRIGHT(2024)
          </div>
          <div className="flex space-x-8">
            {['DOCS', 'CONNECT', 'STATUS'].map(link => (
              <a 
                key={link}
                href="#" 
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                /{link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 