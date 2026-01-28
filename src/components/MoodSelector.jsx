import { moods } from '../data/moods'

function MoodCard({ mood, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-800/80 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/20"
    >
      <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {mood.emoji}
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{mood.name}</h3>
      <p className="text-sm text-slate-400">{mood.tagline}</p>
      
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300"></div>
    </button>
  )
}

function MoodSelector({ onMoodSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(moods).map(([id, mood]) => (
        <MoodCard
          key={id}
          mood={mood}
          onClick={() => onMoodSelect(id)}
        />
      ))}
    </div>
  )
}

export default MoodSelector