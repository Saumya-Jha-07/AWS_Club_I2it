import SectionContainer from '../components/SectionContainer';
import Card from '../components/Card';


export default function Gallery() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <SectionContainer>

        <div className="text-center mb-16 relative z-10 glass-panel p-8 rounded-3xl mx-auto max-w-4xl border-t border-blue-500/20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 mt-4">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-yellow-400">Moments</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Relive the best moments from our AWS Community events, workshops, and meetups.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <Card className="flex items-center justify-center w-full min-h-[500px] md:min-h-[600px] bg-white/[0.02] border border-[#FF9900]/20 mt-4 hover:border-[#FF9900]/40 p-0 md:p-0">

          {/* Top gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF9900]/60 to-transparent"></div>
          {/* Bottom gradient accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>

          <div className="relative text-center p-8 z-10 w-full flex flex-col items-center">
            {/* Pulsing dot */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9900] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF9900]"></span>
              </span>
              <span className="text-[#FF9900]/80 text-sm font-semibold uppercase tracking-[0.2em]">Under Construction</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold tracking-widest uppercase mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9900] to-yellow-400 drop-shadow-lg">
              Coming Soon
            </h2>
            <p className="text-gray-400/80 text-lg md:text-xl max-w-md mx-auto">
              We are curating our best moments. Stay tuned!
            </p>
          </div>
        </Card>
      </SectionContainer>
    </div>
  );
}
