import { useState, useEffect } from 'react'

function PlaylistResult({ mood, onReset, onShuffle }) {
  const [currentDescription, setCurrentDescription] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Randomize description on mount
    const randomDesc = mood.descriptions[Math.floor(Math.random() * mood.descriptions.length)]
    setCurrentDescription(randomDesc)
  }, [mood])

  const handleShare = () => {
    const shareText = `🎵 ${mood.name}\n${currentDescription}\n${mood.playlistUrl}`
    navigator.clipboard.writeText(shareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Result Card */}
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
        {/* Mood Header */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-4 animate-bounce">{mood.emoji}</div>
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {mood.name}
          </h2>
          <p className="text-slate-300 text-lg italic">"{currentDescription}"</p>
        </div>

        {/* Playlist Info */}
        <div className="bg-slate-900/50 rounded-2xl p-6 mb-6 border border-slate-700">
          <h3 className="text-xl font-semibold mb-3 text-purple-300">Your Playlist</h3>
          <p className="text-white font-medium mb-4">{mood.playlistName}</p>
          <a
            href={mood.playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>🎧</span>
            <span>Open Playlist</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReset}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            ← Pick Another Mood
          </button>
          <button
            onClick={onShuffle}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            🎲 Shuffle Again
          </button>
          <button
            onClick={handleShare}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 relative"
          >
            {copied ? '✓ Copied!' : '📋 Share'}
          </button>
        </div>
      </div>

      {/* Vibe Check */}
      <div className="text-center mt-8">
        <p className="text-slate-400 text-sm">
          {mood.vibeCheck || 'now go make something cool ✨'}
        </p>
      </div>
    </div>
  )
}

export default PlaylistResult