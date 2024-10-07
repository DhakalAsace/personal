import React from 'react'
import { Lightbulb, PenTool, Layers } from 'lucide-react'

const specialities = [
  {
    title: 'Product design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi odio ut elementum turpis.',
    icon: Lightbulb,
  },
  {
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi odio ut elementum turpis.',
    icon: PenTool,
  },
  {
    title: 'Interactive design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi odio ut elementum turpis.',
    icon: Layers,
  },
]

const Specialities: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Specialities</h2>
        <p className="text-center max-w-2xl mx-auto mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, non nisi tincidunt ut elementum turpis.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialities.map((specialty, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <specialty.icon size={40} className="text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
              <p>{specialty.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialities