export default function ProgressBar({ current, total }) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 0
  return (
    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-visma-blue to-visma-teal rounded-full transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
