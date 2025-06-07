import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id="123" 
        name="Neura the Brainy Explorer"
        topic="Neural Network Of The Brain"
        subject="science"
        duration={45}
        color="#ffda6e" 
        />
        <CompanionCard 
        id="456" 
        name="Countsy the Number Wizard"
        topic="Derivatives & Integrals"
        subject="maths"
        duration={30}
        color="#e5d0ff" 
        />
                <CompanionCard 
        id="789" 
        name="Vebra the Vocabulary Builder"
        topic="English Literature"
        subject="language"
        duration={30}
        color="#bde7ff" 
        />
      </section>

      <section className='home-section'>
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <Cta/>
      </section>
      
    </div>
  )
}

export default Page