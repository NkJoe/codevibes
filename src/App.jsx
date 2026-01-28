import { useState } from 'react'
import MoodSelector from './components/MoodSelector'
import PlaylistResult from './components/PlaylistResult'
import { moods } from './data/moods'

function App() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [clickCounts, setClickCounts] = useState({})
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const handleMoodSelect = (moodId) => {
    const newCounts = { ...clickCounts }
    newCounts[moodId] = (newCounts[moodId] || 0) + 1

    if (newCounts[moodId] === 3) {
      setShowEasterEgg(true)
      setTimeout(() => setShowEasterEgg(false), 3000)
    }

    setClickCounts(newCounts)
    setSelectedMood(moodId)
  }

  const handleReset = () => {
    setSelectedMood(null)
  }

  const handleShuffle = () => {
    const moodIds = Object.keys(moods)
    const randomMood = moodIds[Math.floor(Math.random() * moodIds.length)]
    setSelectedMood(randomMood)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Ambient background animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="text-center pt-12 pb-8 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Dev Mood → Playlist
          </h1>
          <p className="text-slate-300 text-lg">because your code vibes need a soundtrack</p>
        </header>

        {/* Easter Egg */}
        {showEasterEgg && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-2xl shadow-2xl z-50 animate-bounce">
            <p className="text-2xl font-bold">okay we get it, you're stuck in a mood 😂</p>
          </div>
        )}

        {/* Main Content */}
        <main className="container mx-auto px-4 pb-16 max-w-6xl">
          {!selectedMood ? (
            <>
              <MoodSelector onMoodSelect={handleMoodSelect} />
              <div className="text-center mt-8">
                <button
                  onClick={handleShuffle}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🎲 Shuffle My Mood
                </button>
              </div>
            </>
          ) : (
            <PlaylistResult
              mood={moods[selectedMood]}
              onReset={handleReset}
              onShuffle={handleShuffle}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="text-center pb-8 text-slate-400 text-sm">
          <p>made with ☕ and procrastination</p>
        </footer>
      </div>
    </div>
  )
}

export default App