'use client'

import Image from 'next/image'
import React, {useEffect, useState} from "react"

export default function Home() {
  const initialRetirementAge = Number(localStorage.getItem('retirementAge') || 62)
  const initialRetirementAmount = Number(localStorage.getItem('retirementAmount') || 2000000)
  const initialAnnualRetirementExpenses = Number(localStorage.getItem('annualRetirementExpenses') || 100000)
  const initialCurrentAge = Number(localStorage.getItem('currentAge') || 24)
  const initialCurrentSavings = Number(localStorage.getItem('currentSavings') || 62)
  const initialContribution = Number(localStorage.getItem('contribution') || 500)
  const initialContributionFrequency = localStorage.getItem('contributionFrequency') || "Monthly"
  const initialPreRetROR = Number(localStorage.getItem('preRetROR') || 10)
  const initialPostRetROR = Number(localStorage.getItem('postRetROR') || 10)
  const initialInflation = Number(localStorage.getItem('inflation') || 2.9)

  const [retirementAge, setRetirementAge] = useState(initialRetirementAge)
  const [retirementAmount, setRetirementAmount] = useState(initialRetirementAmount)
  const [annualRetirementExpenses, setAnnualRetirementExpenses] = useState(initialAnnualRetirementExpenses)
  const [currentAge, setCurrentAge] = useState(initialCurrentAge)
  const [currentSavings, setCurrentSavings] = useState(initialCurrentSavings)
  const [contribution, setContribution] = useState(initialContribution)
  const [contributionFrequency, setContributionFrequency] = useState(initialContributionFrequency)
  const [preRetROR, setPreRetROR] = useState(initialPreRetROR)
  const [postRetROR, setPostRetROR] = useState(initialPostRetROR)
  const [inflation, setInflation] = useState(initialInflation)

  return (
    <main className="flex min-h-screen flex-col items-center p-24 font-mono">
      <div className="text-3xl max-w-5xl flex  text-sm lg:flex place-items-center">
        Fire Calculator
      </div>

      <div className="flex flex-col items-start bg-black text-white">
        <h2 className="mb-4">You can retire at age: {retirementAge}</h2>
        <h3 className="mb-4">Target retirement amount: {retirementAmount}</h3>
        <form className="space-y-4">
          <label className="flex flex-col">
            Annual retirement expenses (in today's dollars)
            <input type="number" className="bg-gray-800 text-white p-2 rounded"></input>
          </label>
          <label className="flex flex-col">
            Current age
            <input type="number" className="bg-gray-800 text-white p-2 rounded"></input>
          </label>
          <label className="flex flex-col">
            Current savings balance
            <input type="number" className="bg-gray-800 text-white p-2 rounded"></input>
          </label>
          <label className="flex flex-col">
            Regular contribution
            <input type="number" className="bg-gray-800 text-white p-2 rounded"></input>
          </label>
          <label className="flex flex-col">
            Contribution frequency
            <select className="bg-gray-800 text-white p-2 rounded">
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </label>
          <div className="space-y-4">
            <h2 className="mb-4">Advanced Options</h2>
            <label className="flex flex-col">
              Pre-retirement rate of return
              <input type="number" className="bg-gray-800 text-white p-2 rounded"></input>
            </label>
            <label className="flex flex-col">
              Post-retirement rate of return
              <input type="number" className="bg-gray-800 text-white p-2 rounded"></input>
            </label>
            <label className="flex flex-col">
              Inflation
              <input type="number" className="bg-gray-800 text-white p-2 rounded"></input>
            </label>
          </div>
        </form>
      </div>

    </main>
  )
}
