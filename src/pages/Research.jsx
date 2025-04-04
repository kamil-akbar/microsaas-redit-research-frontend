import { useState } from 'react'

export default function Research() {
  const [topic, setTopic] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement research creation logic
  }

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Create New Research
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>Enter a topic to start researching Reddit content.</p>
        </div>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex gap-x-4">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter research topic"
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Research
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
