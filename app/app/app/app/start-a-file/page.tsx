export default function StartAFilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-light">Start a File</h1>
      <p className="text-sm mt-2">
        Send your executed contract and details, and I’ll complete a midnight review, build your timeline, and send your
        first update within hours.
      </p>

      <form className="space-y-4 text-sm">
        <div>
          <label>Agent Name</label>
          <input className="w-full mt-1 px-2 py-1 bg-slate-900 border border-silver/40 text-sand" />
        </div>
        <div>
          <label>Brokerage</label>
          <input className="w-full mt-1 px-2 py-1 bg-slate-900 border border-silver/40 text-sand" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" className="w-full mt-1 px-2 py-1 bg-slate-900 border border-silver/40 text-sand" />
        </div>
        <div>
          <label>File Details</label>
          <textarea className="w-full mt-1 px-2 py-1 bg-slate-900 border border-silver/40 text-sand" rows={4} />
        </div>
        <p className="text-xs text-sand/70">
          For now, attach your executed contract and addenda via email after submitting this form.
        </p>
        <button type="submit" className="mt-2 px-4 py-2 border border-silver text-silver text-sm">
          Submit file details
        </button>
      </form>
    </div>
  );
}
